import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UserStoryComponent } from './user-story.component';
import { StatisticsService } from '../../services/statistics.service';
import { provideHttpClientTesting } from '@angular/common/http/testing';

describe('UserStoryComponent', () => {
  let component: UserStoryComponent;
  let fixture: ComponentFixture<UserStoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UserStoryComponent],
      providers: [
        StatisticsService,
        provideHttpClientTesting(),
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(UserStoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
