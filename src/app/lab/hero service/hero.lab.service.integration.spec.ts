import { Hero } from './../../hero';
import { HeroServiceForLab } from './hero.lab.service';
describe('3-hero service (http) integration testing:', () => {
  it('getHeroes function: send request and receive response successfully', () => {});
  it('updateHero function: send request and receive response successfully', () => {});
});
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

describe('3-hero service (http) integration testing:', () => {
  let service: HeroServiceForLab;
  let http: jasmine.SpyObj<HttpClient>;

  beforeEach(() => {
    http = jasmine.createSpyObj('HttpClient', ['get', 'put']);
    service = new HeroServiceForLab(http);
  });

  it('should send a GET request and receive a response successfully from getHeroes function', () => {
    const mockResponse: Hero[] = [
      { id: 1, name: 'Hero 1', strength: 0 },
      { id: 2, name: 'Hero 2', strength: 0 },
    ];
    http.get.and.returnValue(of(mockResponse));

    service.getHeroes().subscribe((heroes: Hero[]) => {
      expect(heroes).toEqual(mockResponse);
    });
    expect(http.get).toHaveBeenCalledWith(service.heroesUrl);
  });

  it('should send a PUT request and receive a response successfully from updateHero function', () => {
    const mockHero: Hero = {
      id: 1,
      name: 'Updated Hero',
      strength: 0,
    };
    http.put.and.returnValue(of({}));

    service.updateHero(mockHero).subscribe((response: any) => {
      expect(response).toEqual({});
    });
    expect(http.put).toHaveBeenCalledWith(
      service.heroesUrl,
      mockHero,
      jasmine.any(Object)
    );
  });
});
