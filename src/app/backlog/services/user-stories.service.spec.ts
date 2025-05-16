/// <reference types="jasmine" />

import { TestBed } from '@angular/core/testing';
import { UserStoriesService } from './user-stories.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('UserStoriesService', () => {
  let service: UserStoriesService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [UserStoriesService],
    });

    service = TestBed.inject(UserStoriesService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('debe obtener todas las historias de usuario', () => {
    const mockStories = [
      { id: 1, title: 'Story 1', description: '', status: 'TO_DO', tasks: [], epicId: 0, sprintId: 0, effort: 3 },
    ];

    service.getAll().subscribe((stories) => {
      expect(stories.length).toBe(1);
      expect(stories[0].title).toBe('Story 1');
    });

    const req = httpMock.expectOne(service['resourcePath']());
    expect(req.request.method).toBe('GET');
    req.flush(mockStories);
  });

  afterEach(() => {
    httpMock.verify();
  });
});
