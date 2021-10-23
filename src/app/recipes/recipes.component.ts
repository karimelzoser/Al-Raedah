import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
})
export class RecipesComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    /**/
    /* Demo purposes only */
    $('.hover').mouseleave(function () {
      $(this).removeClass('hover');
    });
    /**/
    $(function () {
      'use strict';
      $('.navbar li a').click(function (e) {
        e.preventDefault();

        $('html, body').animate(
          {
            scrollTop: $('#' + $(this).data('scroll')).offset().top - 50,
          },
          1000
        );
      });

      $(window).scroll(function () {
        $('.block').each(function () {
          if ($(window).scrollTop() > $(this).offset().top) {
            $('.navbar a').removeClass('active');

            var blockID = $(this).attr('id');

            $('.navbar li a[data-scroll="' + blockID + '"]').addClass('active');
          }
        });

        var navbar = $('.navbar');

        if ($(window).scrollTop() >= $('.navbar').height()) {
          navbar.addClass('scrolled');
        } else {
          navbar.removeClass('scrolled');
        }
      });

      $('.scrolltotop').click(function (event) {
        event.preventDefault();

        $('html , body').animate({
          scrollTop: 0,
        });
      });

      // Deal With Tab Section

      $('.tab-switch li').click(function () {
        // add selected class to active	line

        $(this).addClass('selected').siblings().removeClass('selected');

        // hide all divs

        $('.tabs-section .tabs-content > div').hide();

        // show div connetcted with the selected tab

        $($(this).data('class')).show();
      });
    });
    // Loading Screen
  }
}
