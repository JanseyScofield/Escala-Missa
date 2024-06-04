from fpdf import FPDF

    
pdf = FPDF()

pdf.add_page()
pdf.image("modelo-escala.png", x=0, y =0)
pdf.set_font("Arial", "B", 12)

pdf.set_text_color(255, 255, 255)
pdf.text(68, 26, " 01/01")
pdf.text(100, 26, "01/01")
pdf.text(131, 26, "01/01")
pdf.text(162, 26, "01/01")

pdf.set_text_color(0, 0, 0)
pdf.text(63, 46, "salmo 1")
pdf.text(93, 46, "salmo 2")
pdf.text(125, 46, "salmo 3")
pdf.text(157, 46, "salmo 4")
pdf.output("Escala Missa de 12.pdf")