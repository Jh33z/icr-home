import { Injectable } from '@angular/core';
import { ICatalogDropdownData } from '../interfaces/catalog.model';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CatalogService {
  addToFav$: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  addToFavList$: BehaviorSubject<number> = new BehaviorSubject<number>(0);

  dropDownData: ICatalogDropdownData[] = [
    {
      id: 1,
      title: 'ბრენდი',
      dropdown: [
        { id: 1, name: 'Laboratory My Home' },
        { id: 2, name: 'Kare' },
        { id: 3, name: 'Light&Living' },
        { id: 4, name: 'Naterial' },
        { id: 5, name: 'my office' },
        { id: 6, name: 'Speel&Bed' },
        { id: 7, name: 'Saol by laboratory' },
      ],
    },
    {
      id: 2,
      title: 'კატეგორია',
      dropdown: [
        { id: 1, name: 'cat1' },
        { id: 2, name: 'cat2' },
        { id: 3, name: 'cat3' },
        { id: 4, name: 'cat4' },
        { id: 5, name: 'cat5' },
        { id: 6, name: 'cat5' },
        { id: 7, name: 'cat6' },
      ],
    },
    {
      id: 3,
      title: 'ქვეკატეგორია',
      dropdown: [
        { id: 1, name: 'ქვეკატეგორია1' },
        { id: 2, name: 'ქვეკატეგორია2' },
        { id: 3, name: 'ქვეკატეგორია3' },
        { id: 4, name: 'ქვეკატეგორია4' },
        { id: 5, name: 'ქვეკატეგორია5' },
        { id: 6, name: 'ქვეკატეგორია6' },
        { id: 7, name: 'ქვეკატეგორია7' },
      ],
    },
    {
      id: 4,
      title: 'ფერი',
      dropdown: [
        { id: 1, name: 'ფერი1' },
        { id: 2, name: 'ფერი2' },
        { id: 3, name: 'ფერი3' },
        { id: 4, name: 'ფერი4' },
        { id: 5, name: 'ფერი5' },
        { id: 6, name: 'ფერი6' },
        { id: 7, name: 'ფერი7' },
      ],
    },
    {
      id: 5,
      title: 'სპეციფიკა',
      dropdown: [
        { id: 1, name: 'სპეციფიკა1' },
        { id: 2, name: 'სპეციფიკა2' },
        { id: 3, name: 'სპეციფიკა3' },
        { id: 4, name: 'სპეციფიკა4' },
        { id: 5, name: 'სპეციფიკა5' },
        { id: 6, name: 'სპეციფიკა6' },
        { id: 7, name: 'სპეციფიკა7' },
      ],
    },
    {
      id: 6,
      title: 'მასალა',
      dropdown: [
        { id: 1, name: 'მასალა1' },
        { id: 2, name: 'მასალა2' },
        { id: 3, name: 'მასალა3' },
        { id: 4, name: 'მასალა4' },
        { id: 5, name: 'მასალა5' },
        { id: 6, name: 'მასალა6' },
      ],
    },
    {
      id: 7,
      title: 'გასაშლელი',
      dropdown: [
        { id: 1, name: 'გასაშლელი1' },
        { id: 2, name: 'გასაშლელი2' },
        { id: 3, name: 'გასაშლელი3' },
        { id: 4, name: 'გასაშლელი4' },
        { id: 5, name: 'გასაშლელი5' },
        { id: 6, name: 'გასაშლელი6' },
      ],
    },
    {
      id: 8,
      title: 'თაგი',
      dropdown: [
        { id: 1, name: 'თაგი1' },
        { id: 2, name: 'თაგი2' },
        { id: 3, name: 'თაგი3' },
        { id: 4, name: 'თაგი4' },
        { id: 5, name: 'თაგი5' },
        { id: 6, name: 'თაგი6' },
      ],
    },
    {
      id: 9,
      title: 'კოლექცია',
      dropdown: [
        { id: 1, name: 'კოლექცია1' },
        { id: 2, name: 'კოლექცია2' },
        { id: 3, name: 'კოლექცია3' },
        { id: 4, name: 'კოლექცია4' },
        { id: 5, name: 'კოლექცია5' },
        { id: 6, name: 'კოლექცია6' },
        { id: 7, name: 'კოლექცია7' },
        { id: 8, name: 'კოლექცია8' },
      ],
    },
    {
      id: 10,
      title: 'ფასი',
      dropdown: [
        { id: 1, name: 'ფასი1' },
        { id: 2, name: 'ფასი2' },
        { id: 3, name: 'ფასი3' },
        { id: 4, name: 'ფასი4' },
        { id: 5, name: 'ფასი5' },
        { id: 6, name: 'ფასი6' },
      ],
    },
  ];
}
