import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { DetailPokemonPage } from './detail-pokemon.page';

describe('DetailPokemonPage', () => {
  let component: DetailPokemonPage;
  let fixture: ComponentFixture<DetailPokemonPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetailPokemonPage],
      providers: [provideRouter([]), provideHttpClient()],
    }).compileComponents();

    fixture = TestBed.createComponent(DetailPokemonPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});