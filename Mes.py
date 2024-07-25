import Domingo

class Mes:
    def __init__(self):
        self.domingos = []

    def mostar_escala(self):
        """Lista a escala de todos os domingos do mês."""
        for domingo in self.domingos:
            print(f"Dia {domingo.dia}---------")
            print(f"Salmo: {domingo.salmo}")
            print(f"Voz 1: {domingo.voz_1}")
            print(f"Voz 2: {domingo.voz_2}")
            print(f"Voz 3: {domingo.voz_3}")
            print(f"Violão: {domingo.violao}")
            print(f"Teclado: {domingo.teclado}")
            print(f"Bateria ou cajon: {domingo.bateria_cajon}")
    
    def adicionar_domingo(self,  dia : str , salmo : str, voz_1 : str, voz_2 : str, voz_3 : str, violao : str, teclado : str, bat_cajon : str):
        """Adiciona um domingo ao mês."""
        try:
            domingo = Domingo(dia, salmo, voz_1, voz_2, voz_3, violao, teclado,  bat_cajon)
        except:
            print("Erro ao adicionar domingo. Verifique os dados.")
        else:
            self.domingos.append(domingo)
    
    def editar_domingo_pelo_dia(self, dia):
        index_dia = self.domingos.index(Domingo.dia)
        print(index_dia)