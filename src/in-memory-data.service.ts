import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
 
  createDb() {


    const emotions = [
      { id: 11, name: 'HAPPY' },
      { id: 12, name: 'SAD' },
      { id: 13, name: 'STRESSED' },
      { id: 14, name: 'EXCITED' },
      { id: 15, name: 'EMBARRASSED' },
      { id: 16, name: 'SLEEPY' },
      { id: 17, name: 'SURPRISED' },
      { id: 17, name: 'ANXIOUS' },
     
    ];

    return {emotions};

}
}

