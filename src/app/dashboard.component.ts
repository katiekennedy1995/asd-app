import {Component,Input,OnChanges,OnInit,SimpleChanges} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Emotion} from 'emotion';
import {EmotionService} from 'emotion.service';





@Component({
    selector: 'dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
    emotions: Emotion[] = [];
    emotionMatch: string;
    imageMatch: string;

    constructor(private emotionService: EmotionService) {}

    ngOnInit() {
        this.getEmotions();

        //opop up BOX
                     
                                 // Get the modal
var modal = document.getElementById('myModal') as HTMLElement;

// Get the button that opens the modal
var btn = document.getElementById("myBtn") as HTMLElement;

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0] as HTMLElement;


        //function to randomize and get face images
        var w = document.getElementById('wrapper');
        var button = document.getElementById('randomize');
        var images = w.children; // inner elements, your image divs

        // a function to hide all divs
        var hideDivs = function(imgs: HTMLCollection) {
            for (var img of < any > imgs) {
                (img as HTMLElement).style.display = 'none';
            } //for
        } //hideDivs

        hideDivs(images); // hide all initially

        button.addEventListener('click', function(event) {
            console.log('');
            console.log('%c=============================', "color: blue");
            console.log('%c In getFaces method', "color: blue", );
            var rnd = Math.floor(Math.random() * images.length); // get random index
            hideDivs(images); // hide all images

            (images[rnd] as HTMLElement).style.display = 'block'; // show random image
            (event.target as HTMLElement).textContent = 'Click one more time!';
            var getImage = (images[rnd] as HTMLElement);

         //where error occurs
           this.imageMatch = getImage.id;

            console.log('%cImage ID: ', "font-weight: bold", getImage.id);
            console.log('%c=============================', "color: blue");
            console.log('');

        }.bind(this)); //button


    } //ngOnInit

    //if clicked, game starts
    // show: boolean = true;




    //want all to appear in each itteration
    getEmotions(): any {
        console.log('');
        console.log('%c=============================', "color: green");
        console.log('%c In getEmotions method', "color: green", );
        console.log('%c=============================', "color: green");
        console.log('');


        this.emotionService.getEmotions().subscribe(emotions => {
            const slice = emotions.slice(0, 9);
            this.emotions = slice;
        });
    } //getEmotionsEnd


    //FUNCTION submitEmotion- returns the emotion selected
    submitEmotion(event, e: string) {
        console.log('');
        console.log('%c=============================', "color: purple");
        console.log('%c In submitEmotions method', "color: purple", );
        this.emotionMatch = e;
        console.log("%c emotion clicked:", "font-weight: bold", e);
        console.log("%c emotion returned:", "font-weight: bold", this.emotionMatch);
        console.log('%c=============================', "color: purple");
        console.log('');

        this.makeMatch();
     //   return returnEmotion;

    } //submitEmotionEnd

     makeMatch() {
     console.log('');
        console.log('%c=============================', "color: orange");
        console.log('%c In makeMatch method', "color: orange", );
        console.log('%c IMAGE CALLED:', "font-weight: bold", this.emotionMatch);
        console.log('%c FACE CALLED:', "font-weight: bold", this.imageMatch );
      if (this.imageMatch === this.emotionMatch){
             console.log('%c FACE CALLED INSIDE IF:', "font-weight: bold", this.imageMatch );
             console.log('%c emotion CALLED INSIDE IF:', "font-weight: bold", this.emotionMatch );
             console.log("win");
             var modal = document.getElementById("id01");
               modal.classList.toggle("show");
              
          }
            else {
                         console.log("lose");

              // var modal2 = document.getElementById("myModal2");
          //modal2.classList.toggle("show");
            }
                    console.log('%c=============================', "color: orange");

       
       }//makeMatch
       
} //end bracket

