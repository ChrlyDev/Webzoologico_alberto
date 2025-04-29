import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-nuevocomponente',
  imports: [CommonModule],
  templateUrl: './nuevocomponente.component.html',
  styleUrl: './nuevocomponente.component.css'
})
export class NuevocomponenteComponent {
  title = 'Mi Amor';
  elementos = [
    {
      nombre: 'Hidrogeno',
      simbolo: 'H',
      numeroAtomico: 1,
      pesoAtomico: 1.008
    },
    {
      nombre: 'Helio',
      simbolo: 'He',
      numeroAtomico: 2,
      pesoAtomico: 4.003
    },
    {
      nombre: 'Litio',
      simbolo: 'Li',
      numeroAtomico: 3,
      pesoAtomico: 6.94
    },
    {
      nombre: 'Berilio',
      simbolo: 'Be',
      numeroAtomico: 4,
      pesoAtomico: 9.012
    },
    {
      nombre: 'Boro',
      simbolo: 'B',
      numeroAtomico: 5,
      pesoAtomico: 10.81
    },
    {
      nombre: 'Carbono',
      simbolo: 'C',
      numeroAtomico: 6,
      pesoAtomico: 12.01
    },
    {
      nombre: 'Nitrogeno',
      simbolo: 'N',
      numeroAtomico: 7,
      pesoAtomico: 14.01
    },
    {
      nombre: 'Oxigeno',
      simbolo: 'O',
      numeroAtomico: 8,
      pesoAtomico: 15.999
    },
    {
      nombre: 'Fluor',
      simbolo: 'F',
      numeroAtomico: 9,
      pesoAtomico: 18.998
    },
    {
      nombre: 'Neon',
      simbolo: 'Ne',
      numeroAtomico: 10,
      pesoAtomico: 20.179
    },
    {
      nombre: 'Sodio',
      simbolo: 'Na',
      numeroAtomico: 11,
      pesoAtomico: 22.989
    },
    {
      nombre: 'Magnesio',
      simbolo: 'Mg',
      numeroAtomico: 12,
      pesoAtomico: 24.305
    },
    {
      nombre: 'Aluminio',
      simbolo: 'Al',
      numeroAtomico: 13,
      pesoAtomico: 26.981
    },
    {
      nombre: 'Silicio',
      simbolo: 'Si',
      numeroAtomico: 14,
      pesoAtomico: 28.086
    },
    {
      nombre: 'Fosforo',
      simbolo: 'P',
      numeroAtomico: 15,
      pesoAtomico: 30.974
    },
    {
      nombre: 'Azufre',
      simbolo: 'S',
      numeroAtomico: 16,
      pesoAtomico: 32.06
    },
    {
      nombre: 'Cloro',
      simbolo: 'Cl',
      numeroAtomico: 17,
      pesoAtomico: 35.45
    },
    {
      nombre: 'Argon',
      simbolo: 'Ar',
      numeroAtomico: 18,
      pesoAtomico: 39.948
    },
    {
      nombre: 'Potasio',
      simbolo: 'K',
      numeroAtomico: 19,
      pesoAtomico: 39.098
    },
    {
      nombre: 'Calcio',
      simbolo: 'Ca',
      numeroAtomico: 20,
      pesoAtomico: 40.078
    },
    {
      nombre: 'Escandio',
      simbolo: 'Sc',
      numeroAtomico: 21,
      pesoAtomico: 44.955
    },
    {
      nombre: 'Titanio',
      simbolo: 'Ti',
      numeroAtomico: 22,
      pesoAtomico: 47.867
    },
    {
      nombre: 'Vanadio',
      simbolo: 'V',
      numeroAtomico: 23,
      pesoAtomico: 50.941
    },
    {
      nombre: 'Cromo',
      simbolo: 'Cr',
      numeroAtomico: 24,
      pesoAtomico: 51.996
    },
    {
      nombre: 'Manganeso',
      simbolo: 'Mn',
      numeroAtomico: 25,
      pesoAtomico: 54.938
    },
    {
      nombre: 'Hierro',
      simbolo: 'Fe',
      numeroAtomico: 26,
      pesoAtomico: 55.847
    },
    {
      nombre: 'Cobalto',
      simbolo: 'Co',
      numeroAtomico: 27,
      pesoAtomico: 58.933
    },
    {
      nombre: 'Niquel',
      simbolo: 'Ni',
      numeroAtomico: 28,
      pesoAtomico: 58.693
    },
    {
      nombre: 'Cobre',
      simbolo: 'Cu',
      numeroAtomico: 29,
      pesoAtomico: 63.546
    },
    {
      nombre: 'Zinc',
      simbolo: 'Zn',
      numeroAtomico: 30,
      pesoAtomico: 65.38
    },
    {
      nombre: 'Galio',
      simbolo: 'Ga',
      numeroAtomico: 31,
      pesoAtomico: 69.723
    },
    {
      nombre: 'Germanio',
      simbolo: 'Ge',
      numeroAtomico: 32,
      pesoAtomico: 72.59
    },
    {
      nombre: 'Arsenico',
      simbolo: 'As',
      numeroAtomico: 33,
      pesoAtomico: 74.922
    },
    {
      nombre: 'Selenio',
      simbolo: 'Se',
      numeroAtomico: 34,
      pesoAtomico: 78.971
    },
    {
      nombre: 'Bromo',
      simbolo: 'Br',
      numeroAtomico: 35,
      pesoAtomico: 79.904
    },
    {
      nombre: 'Kripton',
      simbolo: 'Kr',
      numeroAtomico: 36,
      pesoAtomico: 83.8
    },
    {
      nombre: 'Estroncio',
      simbolo: 'Sr',
      numeroAtomico: 37,
      pesoAtomico: 87.62
    },
    {
      nombre: 'Rubidio',
      simbolo: 'Rb',
      numeroAtomico: 38,
      pesoAtomico: 85.467
    },
    {
      nombre: 'Estroncio',
      simbolo: 'Sr',
      numeroAtomico: 39,
      pesoAtomico: 87.62
    },
    {
      nombre: 'Ytrio',
      simbolo: 'Y',
      numeroAtomico: 39,
      pesoAtomico: 88.905
    },
    {
      nombre: 'Zirconio',
      simbolo: 'Zr',
      numeroAtomico: 40,
      pesoAtomico: 91.224
    },
    {
      nombre: 'Niobio',
      simbolo: 'Nb',
      numeroAtomico: 41,
      pesoAtomico: 92.906
    },
    {
      nombre: 'Molibdeno',
      simbolo: 'Mo',
      numeroAtomico: 42,
      pesoAtomico: 95.94
    },
    {
      nombre: 'Tecnecio',
      simbolo: 'Tc',
      numeroAtomico: 43,
      pesoAtomico: 98.0
    },
    {
      nombre: 'Rutenio',
      simbolo: 'Ru',
      numeroAtomico: 44,
      pesoAtomico: 101.07
    },
    {
      nombre: 'Rodio',
      simbolo: 'Rh',
      numeroAtomico: 45,
      pesoAtomico: 102.905
    },
    {
      nombre: 'Paladio',
      simbolo: 'Pd',
      numeroAtomico: 46,
      pesoAtomico: 106.42
    },
    {
      nombre: 'Plata',
      simbolo: 'Ag',
      numeroAtomico: 47,
      pesoAtomico: 107.868
    },
    {
      nombre: 'Cadmio',
      simbolo: 'Cd',
      numeroAtomico: 48,
      pesoAtomico: 112.414
    },
    {
      nombre: 'Indio',
      simbolo: 'In',
      numeroAtomico: 49,
      pesoAtomico: 114.818
    },
    {
      nombre: 'Esta o',
      simbolo: 'Sn',
      numeroAtomico: 50,
      pesoAtomico: 118.71
    },
    {
      nombre: 'Antimonio',
      simbolo: 'Sb',
      numeroAtomico: 51,
      pesoAtomico: 121.76
    },
    {
      nombre: 'Teluro',
      simbolo: 'Te',
      numeroAtomico: 52,
      pesoAtomico: 127.6
    },
    {
      nombre: 'Iodo',
      simbolo: 'I',
      numeroAtomico: 53,
      pesoAtomico: 126.904
    },
]
  }

