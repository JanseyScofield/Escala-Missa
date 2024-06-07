from fpdf import FPDF
import Domingo

def receber_nomes(dia : int, mes : int):
    """Essa função recebe do usuário os nomes das pessoas que irão servir em cada função a partir do dia  mês passados como parâmetros e retorna todos os nomes digitados."""
    print(f"Quem irá servir no dia {dia}/{mes}? ")
    vozes = []
    salmo = input("Salmo: ")
    for iCont in range(3):
        vozes.append(input(f"Voz {iCont + 1}: "))
    violao = input("Violão: ")
    teclado = input("Teclado: ")
    bat_cajon = input("Bateria ou cajon: ")
    return salmo, vozes, violao, teclado, bat_cajon

def gerar_escala_missa(primeiro_domingo : str): 
    """Função utilizada para fazer uma escala de missa:
    Coordenadas para datas: 
     - 68, 26;
     - 100, 26;
     - 131, 26;
     - 162, 26
     Coordenatas para salmos:
     - 68, 46;
     - 93, 46;
     - 125, 46;
     - 157, 46
    """
    lista_data = primeiro_domingo.split("/")
    dia = int(lista_data[0])
    mes = int(lista_data[1])
    listaDomingos = []
    while dia <= 31:
        listaDomingos.append(receber_nomes(dia, mes))
        dia += 7
    print(listaDomingos)