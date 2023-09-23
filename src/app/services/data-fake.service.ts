import { Injectable } from '@angular/core';
import { dataMock } from '../mock/mock-data';


export interface Card {
  id: number
  gameCover: string
  gameLabel: string
  gameType: string
  gamePrice: string
}

@Injectable({
  providedIn: 'root'
})
export class DataFakeService {
  getCards(): Card[] {
    return dataMock
  }
}
