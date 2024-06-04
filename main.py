from fpdf import FPDF

pdf = FPDF()

pdf.add_page()
pdf.image("modelo-escala.jpeg")
pdf.output("Escala Missa de 12.pdf")