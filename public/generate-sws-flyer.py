#!/usr/bin/env python3
"""
Generate print-ready PDF for SWS Small Business Grant flyer.

Specs:
  - Trim: 5.5" x 8.5"
  - Bleed: 0.125" on all sides → 5.75" x 8.75"
  - 300 DPI, CMYK
  - Crop marks
"""

import os
import urllib.request
from reportlab.pdfgen import canvas
from reportlab.lib.units import inch
from reportlab.lib.colors import CMYKColor
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.lib.utils import ImageReader
from PIL import Image, ImageDraw

# ─── Paths ───
SCRIPT_DIR = os.path.dirname(os.path.abspath(__file__))
OUTPUT_PDF = os.path.join(SCRIPT_DIR, "sws-grant-flyer.pdf")
HEADSHOT_PATH = os.path.join(SCRIPT_DIR, "jay-owen-headshot.jpg")
LOGO_PATH = os.path.join(SCRIPT_DIR, "logo-full.png")
QR_PATH = "/tmp/sws-qr-code.png"

# ─── Dimensions ───
TRIM_W = 5.5 * inch
TRIM_H = 8.5 * inch
BLEED = 0.125 * inch
PAGE_W = TRIM_W + 2 * BLEED
PAGE_H = TRIM_H + 2 * BLEED
CROP_LEN = 0.25 * inch
CROP_OFFSET = 0.0625 * inch  # gap between crop mark and trim edge

# ─── CMYK Colors ───
CHARCOAL = CMYKColor(0.0, 0.0, 0.07, 0.90)
YELLOW = CMYKColor(0.0, 0.16, 0.92, 0.02)
WHITE = CMYKColor(0.0, 0.0, 0.0, 0.0)
STONE_LIGHT = CMYKColor(0.0, 0.02, 0.04, 0.34)
STONE_MID = CMYKColor(0.0, 0.03, 0.06, 0.53)
STONE_DARK = CMYKColor(0.0, 0.04, 0.07, 0.73)
DIVIDER = CMYKColor(0.0, 0.01, 0.01, 0.10)
BLACK = CMYKColor(0.0, 0.0, 0.0, 1.0)

# ─── Fonts ───
FONT_DIR = "/tmp/inter-fonts"
for name in ["Inter-Regular", "Inter-SemiBold", "Inter-Bold", "Inter-ExtraBold", "Inter-Black"]:
    pdfmetrics.registerFont(TTFont(name, f"{FONT_DIR}/{name}.ttf"))


def download_qr():
    if not os.path.exists(QR_PATH):
        url = "https://api.qrserver.com/v1/create-qr-code/?data=https://businessbldrs.com/sws&size=600x600&format=png"
        urllib.request.urlretrieve(url, QR_PATH)
    return QR_PATH


def make_circular_headshot(src_path, size=600):
    """Create a circular-cropped headshot with yellow border as a temp PNG."""
    out_path = "/tmp/jay-headshot-circle.png"
    img = Image.open(src_path).convert("RGBA")

    # Crop to square from top-center
    w, h = img.size
    sq = min(w, h)
    left = (w - sq) // 2
    img = img.crop((left, 0, left + sq, sq))
    img = img.resize((size, size), Image.LANCZOS)

    # Create circular mask
    mask = Image.new("L", (size, size), 0)
    draw = ImageDraw.Draw(mask)
    draw.ellipse((0, 0, size, size), fill=255)

    # Apply mask
    result = Image.new("RGBA", (size, size), (0, 0, 0, 0))
    result.paste(img, (0, 0), mask)

    # Add yellow border ring
    border_w = int(size * 0.03)
    draw_result = ImageDraw.Draw(result)
    draw_result.ellipse(
        (0, 0, size - 1, size - 1),
        outline=(250, 204, 21, 255),
        width=border_w,
    )

    result.save(out_path, "PNG")
    return out_path


def draw_crop_marks(c):
    """Draw crop/trim marks at the four corners."""
    c.setStrokeColor(BLACK)
    c.setLineWidth(0.25)

    corners = [
        (BLEED, BLEED),                          # bottom-left
        (BLEED + TRIM_W, BLEED),                  # bottom-right
        (BLEED, BLEED + TRIM_H),                  # top-left
        (BLEED + TRIM_W, BLEED + TRIM_H),         # top-right
    ]

    for cx, cy in corners:
        # Horizontal marks
        if cx == BLEED:
            c.line(cx - BLEED - CROP_OFFSET, cy, cx - BLEED - CROP_OFFSET - CROP_LEN, cy)
        else:
            c.line(cx + BLEED + CROP_OFFSET, cy, cx + BLEED + CROP_OFFSET + CROP_LEN, cy)

        # Vertical marks
        if cy == BLEED:
            c.line(cx, cy - BLEED - CROP_OFFSET, cx, cy - BLEED - CROP_OFFSET - CROP_LEN)
        else:
            c.line(cx, cy + BLEED + CROP_OFFSET, cx, cy + BLEED + CROP_OFFSET + CROP_LEN)


def draw_checkmark(c, cx, cy, box_size):
    """Draw a yellow square with a checkmark."""
    c.setFillColor(YELLOW)
    c.rect(cx, cy, box_size, box_size, fill=1, stroke=0)
    # Checkmark
    c.setStrokeColor(CHARCOAL)
    c.setLineWidth(2)
    c.setLineCap(1)
    p = c.beginPath()
    m = box_size * 0.15
    p.moveTo(cx + m, cy + box_size * 0.48)
    p.lineTo(cx + box_size * 0.38, cy + m)
    p.lineTo(cx + box_size - m, cy + box_size - m)
    c.drawPath(p, fill=0, stroke=1)


def draw_text_block(c, x, y, lines, max_width=None):
    """Draw multiple lines of text. Each line is (text, font, size, color).
    Returns the y position after the last line."""
    for text, font, size, color, spacing in lines:
        c.setFont(font, size)
        c.setFillColor(color)
        c.drawString(x, y, text)
        y -= size + spacing
    return y


def build_pdf():
    qr_path = download_qr()
    headshot_path = make_circular_headshot(HEADSHOT_PATH, size=600)

    c = canvas.Canvas(OUTPUT_PDF, pagesize=(PAGE_W, PAGE_H))
    c.setTitle("$25,000 Small Business Grant — Business Builders")

    # All coordinates offset by BLEED so (0,0) in trim = (BLEED, BLEED) on page
    bx = BLEED  # x offset
    by = BLEED  # y offset

    # ─── Section heights (within trim area) ───
    top_h = TRIM_H * 0.28
    mid_h = TRIM_H * 0.32
    brk_h = TRIM_H * 0.20
    bot_h = TRIM_H * 0.20

    top_y = by + bot_h + brk_h + mid_h  # top of "top" section
    mid_y = by + bot_h + brk_h           # top of "middle" section
    brk_y = by + bot_h                   # top of "breakout" section
    bot_y = by                           # top of "bottom" section

    # ═══════════════ TOP SECTION (charcoal) ═══════════════
    # Background with bleed
    c.setFillColor(CHARCOAL)
    c.rect(0, top_y, PAGE_W, top_h + BLEED, fill=1, stroke=0)

    cx_center = bx + TRIM_W / 2  # center x in trim

    # Logo
    if os.path.exists(LOGO_PATH):
        logo_h = 28
        logo_w = logo_h * 4.5  # approximate aspect ratio
        c.drawImage(
            LOGO_PATH,
            cx_center - logo_w / 2,
            top_y + top_h - 42 - logo_h,
            width=logo_w,
            height=logo_h,
            mask="auto",
        )

    # Badge
    badge_text = "EXCLUSIVE TO SCALE WITH STABILITY ATTENDEES"
    badge_font_size = 7
    c.setFont("Inter-Bold", badge_font_size)
    badge_w = c.stringWidth(badge_text, "Inter-Bold", badge_font_size) + 24
    badge_h = 18
    badge_y = top_y + top_h - 82
    c.setFillColor(YELLOW)
    c.rect(cx_center - badge_w / 2, badge_y, badge_w, badge_h, fill=1, stroke=0)
    c.setFillColor(CHARCOAL)
    c.drawCentredString(cx_center, badge_y + 5.5, badge_text)

    # Headline: $25,000
    hl1_y = badge_y - 42
    c.setFont("Inter-Black", 40)
    c.setFillColor(YELLOW)
    c.drawCentredString(cx_center, hl1_y, "$25,000")

    # Headline: SMALL BUSINESS GRANT
    hl2_y = hl1_y - 36
    c.setFont("Inter-Black", 30)
    c.setFillColor(WHITE)
    c.drawCentredString(cx_center, hl2_y, "SMALL BUSINESS GRANT")

    # Subhead
    sub_y = hl2_y - 22
    c.setFont("Inter-Regular", 14)
    c.setFillColor(STONE_LIGHT)
    c.drawCentredString(cx_center, sub_y, "Win a Custom Messaging & Website Redesign")

    # ═══════════════ MIDDLE SECTION (white) ═══════════════
    c.setFillColor(WHITE)
    c.rect(0, mid_y, PAGE_W, mid_h, fill=1, stroke=0)

    margin = 0.5 * inch
    content_x = bx + margin
    content_w = TRIM_W - 2 * margin

    # Deliverable 1: StoryBrand BrandScript
    d1_y = mid_y + mid_h - 36
    check_size = 22
    draw_checkmark(c, content_x, d1_y - 4, check_size)

    text_x = content_x + check_size + 10
    c.setFont("Inter-ExtraBold", 14)
    c.setFillColor(CHARCOAL)
    c.drawString(text_x, d1_y, "STORYBRAND BRANDSCRIPT")

    # Value tag
    val_y = d1_y - 17
    val_text = "$7,500 VALUE"
    c.setFont("Inter-Bold", 9)
    val_w = c.stringWidth(val_text, "Inter-Bold", 9) + 12
    c.setFillColor(CHARCOAL)
    c.rect(text_x, val_y - 2, val_w, 14, fill=1, stroke=0)
    c.setFillColor(YELLOW)
    c.drawString(text_x + 6, val_y, val_text)

    desc_y = val_y - 16
    c.setFont("Inter-Regular", 9)
    c.setFillColor(STONE_MID)
    c.drawString(text_x, desc_y, "Complete messaging framework \u2014 brand voice, positioning,")
    c.drawString(text_x, desc_y - 13, "key talking points, and a marketing roadmap to grow your business.")

    # Divider
    div_y = desc_y - 26
    c.setStrokeColor(DIVIDER)
    c.setLineWidth(1.5)
    c.line(content_x, div_y, content_x + content_w, div_y)

    # Deliverable 2: Custom Website Redesign
    d2_y = div_y - 18
    draw_checkmark(c, content_x, d2_y - 4, check_size)

    c.setFont("Inter-ExtraBold", 14)
    c.setFillColor(CHARCOAL)
    c.drawString(text_x, d2_y, "CUSTOM WEBSITE REDESIGN")

    val2_y = d2_y - 17
    val2_text = "$17,500 VALUE"
    c.setFont("Inter-Bold", 9)
    val2_w = c.stringWidth(val2_text, "Inter-Bold", 9) + 12
    c.setFillColor(CHARCOAL)
    c.rect(text_x, val2_y - 2, val2_w, 14, fill=1, stroke=0)
    c.setFillColor(YELLOW)
    c.drawString(text_x + 6, val2_y, val2_text)

    desc2_y = val2_y - 16
    c.setFont("Inter-Regular", 9)
    c.setFillColor(STONE_MID)
    c.drawString(text_x, desc2_y, "Full StoryBrand website build \u2014 mobile-responsive, SEO-optimized,")
    c.drawString(text_x, desc2_y - 13, "and designed to convert visitors into customers.")

    # Total callout bar
    total_bar_h = 30
    total_bar_y = mid_y + 12
    c.setFillColor(CHARCOAL)
    c.rect(content_x, total_bar_y, content_w, total_bar_h, fill=1, stroke=0)
    c.setFont("Inter-Black", 18)
    c.setFillColor(WHITE)
    total_text_y = total_bar_y + 8
    w1 = c.stringWidth("$25,000 ", "Inter-Black", 18)
    total_x = cx_center - (w1 + c.stringWidth("TOTAL VALUE", "Inter-Black", 18)) / 2
    c.drawString(total_x, total_text_y, "$25,000 ")
    c.setFillColor(YELLOW)
    c.drawString(total_x + w1, total_text_y, "TOTAL VALUE")

    # ═══════════════ BREAKOUT SECTION (yellow) ═══════════════
    c.setFillColor(YELLOW)
    c.rect(0, brk_y, PAGE_W, brk_h, fill=1, stroke=0)

    # Headshot (circular)
    hs_size = 1.1 * inch
    hs_x = bx + margin
    hs_y = brk_y + (brk_h - hs_size) / 2
    c.drawImage(headshot_path, hs_x, hs_y, width=hs_size, height=hs_size, mask="auto")

    # Name under headshot
    hs_cx = hs_x + hs_size / 2
    c.setFont("Inter-Bold", 9)
    c.setFillColor(CHARCOAL)
    c.drawCentredString(hs_cx, hs_y - 12, "JAY OWEN")
    c.setFont("Inter-Regular", 7)
    c.setFillColor(STONE_DARK)
    c.drawCentredString(hs_cx, hs_y - 22, "Founder & CEO")

    # Session info
    info_x = hs_x + hs_size + 18
    info_top = brk_y + brk_h - 18

    c.setFont("Inter-Bold", 7)
    c.setFillColor(STONE_DARK)
    c.drawString(info_x, info_top, "SWS BREAKOUT SESSION")

    c.setFont("Inter-Black", 18)
    c.setFillColor(CHARCOAL)
    c.drawString(info_x, info_top - 22, "\u201cBUILDING A")
    c.drawString(info_x, info_top - 43, "KINGDOM BUSINESS\u201d")

    c.setFont("Inter-Regular", 9)
    c.setFillColor(STONE_DARK)
    c.drawString(info_x, info_top - 60, "Join Jay\u2019s breakout for an exclusive bonus")
    c.drawString(info_x, info_top - 72, "only available to attendees in the room.")

    # Bonus tag
    bonus_text = "\u2605  ATTEND FOR A SPECIAL BONUS"
    c.setFont("Inter-Bold", 8)
    bonus_w = c.stringWidth(bonus_text, "Inter-Bold", 8) + 18
    bonus_h = 20
    bonus_y = info_top - 94
    c.setFillColor(CHARCOAL)
    c.rect(info_x, bonus_y, bonus_w, bonus_h, fill=1, stroke=0)
    c.setFillColor(YELLOW)
    c.drawString(info_x + 9, bonus_y + 6, bonus_text)

    # ═══════════════ BOTTOM SECTION (charcoal) ═══════════════
    c.setFillColor(CHARCOAL)
    c.rect(0, 0, PAGE_W, brk_y, fill=1, stroke=0)

    # QR code
    qr_size = 1.05 * inch
    qr_x = bx + margin
    qr_cy = bot_y + bot_h / 2
    qr_y = qr_cy - qr_size / 2 + 6

    # Yellow border behind QR
    qr_border = 3
    c.setFillColor(YELLOW)
    c.rect(qr_x - qr_border, qr_y - qr_border, qr_size + 2 * qr_border, qr_size + 2 * qr_border, fill=1, stroke=0)
    c.drawImage(qr_path, qr_x, qr_y, width=qr_size, height=qr_size)

    # Scan label
    c.setFont("Inter-Bold", 8)
    c.setFillColor(YELLOW)
    c.drawCentredString(qr_x + qr_size / 2, qr_y - 14, "SCAN TO ENTER")

    # Deadline + info
    info_x2 = qr_x + qr_size + 28

    c.setFont("Inter-Bold", 7.5)
    c.setFillColor(STONE_LIGHT)
    dl_top = qr_y + qr_size - 2
    c.drawString(info_x2, dl_top, "ENTRY DEADLINE")

    c.setFont("Inter-Black", 22)
    c.setFillColor(WHITE)
    c.drawString(info_x2, dl_top - 24, "APRIL 25, 2026")

    c.setFont("Inter-Regular", 8)
    c.setFillColor(STONE_MID)
    c.drawString(info_x2, dl_top - 42, "StoryBrand Certified \u2022 HubSpot Platinum Partner \u2022 26+ Years")
    c.drawString(info_x2, dl_top - 54, "1 winner selected \u2022 Open to SWS attendees only")

    c.setFont("Inter-Bold", 10)
    c.setFillColor(YELLOW)
    c.drawString(info_x2, dl_top - 72, "businessbldrs.com/sws")

    # ═══════════════ CROP MARKS ═══════════════
    draw_crop_marks(c)

    c.save()
    print(f"PDF saved to: {OUTPUT_PDF}")
    print(f"Page size: {PAGE_W/inch:.3f}\" x {PAGE_H/inch:.3f}\" (with bleed)")
    print(f"Trim size: {TRIM_W/inch:.3f}\" x {TRIM_H/inch:.3f}\"")


if __name__ == "__main__":
    build_pdf()
