import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Counter } from './counter';

describe('Counter', () => {
  let component: Counter;
  let fixture: ComponentFixture<Counter>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Counter]
    })
      .compileComponents();

    fixture = TestBed.createComponent(Counter);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display initial count = 0', () => {
    const element: HTMLElement = fixture.nativeElement;
    const value = element.querySelector('[data-testid="value"]');
    expect(value?.textContent).toBe('0');
  });

  it('should increment count when button is clicked', () => {
    const element: HTMLElement = fixture.nativeElement;
    const button = element.querySelector('[data-testid="increment"]') as HTMLButtonElement;

    button.click();
    fixture.detectChanges();

    expect(component.count).toBe(1);

    const value = element.querySelector('[data-testid="value"]');
    expect(value?.textContent).toBe('1');
  });
});
