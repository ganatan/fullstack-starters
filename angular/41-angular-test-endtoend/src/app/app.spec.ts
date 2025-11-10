import { TestBed } from '@angular/core/testing'
import { App } from './app'

describe('App', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App],
    }).compileComponents()
  })

  it('should create the app', () => {
    // ARRANGE
    const fixture = TestBed.createComponent(App)

    // ACT
    const app = fixture.componentInstance

    // ASSERT
    expect(app).toBeTruthy()
  })

  it('should render title', () => {
    // ARRANGE
    const fixture = TestBed.createComponent(App)

    // ACT
    fixture.detectChanges()
    const compiled = fixture.nativeElement as HTMLElement

    // ASSERT
    expect(compiled.querySelector('h1')?.textContent).toContain('angular-starter-test')
  })

  it('should update name when clicking button', () => {
    // ARRANGE
    const fixture = TestBed.createComponent(App)
    fixture.detectChanges()
    const compiled = fixture.nativeElement as HTMLElement
    const button = compiled.querySelector('button') as HTMLButtonElement

    // ACT
    button.click()
    fixture.detectChanges()

    // ASSERT
    expect(compiled.textContent).toContain('Change Name')
  })


})

