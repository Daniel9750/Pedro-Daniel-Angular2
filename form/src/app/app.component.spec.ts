import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let fixture:ComponentFixture<AppComponent>;
  let app:AppComponent;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    app = fixture.componentInstance;
  });

  it('should create the app', () => {
    expect(app).toBeTruthy();
  });

  it('should have a fullname', () => {
    let appFixture = fixture.nativeElement;
    let appFixtureButton = appFixture.querySelector('button');
    appFixtureButton.click();
    let appFullname:HTMLInputElement = appFixture.querySelector('input[formControlName="fullname"]');
    expect(appFullname.getAttribute('class')).toContain('is-invalid');
    appFullname.value = 'dcfgvh';
    fixture.detectChanges();
    appFixtureButton.click();
    expect(appFullname.getAttribute('class')).not.toContain('is-invalid');
    console.log(appFullname.getAttribute('class'));
  });


/*
  it('should have an username', () => {
    let appFixture = fixture.nativeElement;
    let appFixtureButton = appFixture.querySelector('button');
    appFixtureButton.click();
    let appUsername:HTMLInputElement = appFixture.querySelector('input[formControlName="username"]');
    expect(appUsername.classList[0]).toBe('is-invalid');
    appUsername.value = 'dcfgvh';
    fixture.detectChanges();
    appFixtureButton.click();
    expect(appUsername.classList[0]).not.toBe('is-invalid');
  });

  it('should have a valid email', () => {
    
    expect(app).toBeTruthy();
  });

  it('should have a password', () => {
    let appFixture = fixture.nativeElement;
    let appFixtureButton = appFixture.querySelector('button');
    appFixtureButton.click();
    let appPassword:HTMLInputElement = appFixture.querySelector('input[formControlName="password"]');
    expect(appPassword.classList[0]).toBe('is-invalid');
    appPassword.value = 'dcfgvh';
    fixture.detectChanges();
    appFixtureButton.click();
    expect(appPassword.classList[0]).not.toBe('is-invalid');
  });

  it('should have confirm password equal to password', () => {
    
    expect(app).toBeTruthy();
  });


*/
 


});
