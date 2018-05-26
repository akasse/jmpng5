import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.scss']
})
export class ProfilComponent implements OnInit {

  constructor() { }

  ngOnInit() {

  $(document).ready(function(){
    alert('akasse');
    var zindex = 10;

    $("div.card").click(function(e){
      e.preventDefault();

      var isShowing = false;

      if ($(this).hasClass("show")) {
        isShowing = true
      }

      if ($("div.cards").hasClass("showing")) {
        // a card is already in view
        $("div.card.show")
          .removeClass("show");

        if (isShowing) {
          // this card was showing - reset the grid
          $("div.cards")
            .removeClass("showing");
        } else {
          // this card isn't showing - get in with it
          $(this)
            .css({zIndex: zindex})
            .addClass("show");

        }

        zindex++;

      } else {
        // no cards in view
        $("div.cards")
          .addClass("showing");
        $(this)
          .css({zIndex:zindex})
          .addClass("show");

        zindex++;
      }

    });
  });

  }

}