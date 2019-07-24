import { TestBed } from '@angular/core/testing';

import { GitHubRepositoriesService } from './git-hub-repositories.service';

describe('GitHubRepositoriesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GitHubRepositoriesService = TestBed.get(GitHubRepositoriesService);
    expect(service).toBeTruthy();
  });
});
