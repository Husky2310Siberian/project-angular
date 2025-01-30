import { Component , inject } from '@angular/core';
import { JokesService } from '../../shared/services/jokes.service';
import { MatCardModule} from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-http-client-example',
  imports: [MatButtonModule , MatCardModule],
  templateUrl: './http-client-example.component.html',
  styleUrl: './http-client-example.component.css'
})
export class HttpClientExampleComponent {
  jokesService = inject(JokesService)
  dadJoke : string = '';
  chuckNorrisJokes : string = '';

 // constructor(public jokesService : JokesService) {}

 ngOnInit() {
  // this.jokesService.getDadJokes()
  //       .subscribe((data)=>{
  //         console.log("DAD JOKE",data)
  //         this.dadJoke = data.joke;
  //       })

  // this.jokesService.getChuckNorrisJokes()
  //       .subscribe((data) => {
  //         //console.log(data)
  //         console.log("CHUCK NORRIS JOKE",data.value)
  //         this.chuckNorrisJokes = data.value;
  //       })

      this.refreshDadJoke();
      this.refreshChuckNorrisJoke();
      }

      refreshDadJoke() {
        this.jokesService.getDadJokes()
          .subscribe((data) => {
            this.dadJoke = data.joke
          })
      }

      refreshChuckNorrisJoke(){
        this.jokesService.getChuckNorrisJokes()
          .subscribe((data) => {
            this.chuckNorrisJokes = data.value
          })

      }


}
