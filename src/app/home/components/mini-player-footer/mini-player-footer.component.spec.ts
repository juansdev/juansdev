import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiniPlayerFooterComponent } from './mini-player-footer.component';

describe('MiniPlayerFooterComponent', () => {
  let component: MiniPlayerFooterComponent;
  let fixture: ComponentFixture<MiniPlayerFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MiniPlayerFooterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MiniPlayerFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
