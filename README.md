
# Web application: anime series search engine

## **Module 2: Final assessment exercise**

## Project developed with: 
### 1. Attention to detail 🔎
### 2. Clean and tidy code 🧹
### 3. Fun 🎉 <br> <br> 




![](https://i.imgur.com/zehbmMj.png)
![](https://i.imgur.com/soz1DM9.png)


## Assignment

The exercise consists of developing a web application to search for anime series, which allows us to un/mark series as favorites and save them in local storage.


## Solved interactions


## 1.	Search
The series search application contains two parts: <br>
 . A text field and a button to search for series by their title. <br>
 . A list of search results where the series poster and title are displayed.

When you click on the Search button, the application connects to Jikan's open API for searching anime series. 

To construct the search URL, the text entered by the user in the search field is collected. 

For each series contained in the search result a card is painted where we show an image of the series and the title. Some of the series returned by the API do not have an image. In that case a filler image is displayed. 



## 2.	Favorites
Once the search results are displayed, the user is able to indicate which are his favorite series. To do this, the following happens when clicking on a series: <br>

The background color and the font color are switched, indicating that it is a favorite series. <br>

A list is displayed on the left side of the screen, below the search form, with the favorite series.  <br>

The favorite series continue to appear on the left side of the screen even if the user performs another search.


## 3. Local storage
The list of favorites is stored in the localStorage. This way, when reloading the page the list of favorites is displayed.

## 4. Delete favorites
If we perform a new search and a series that is already a favorite comes up, it is already highlighted in the search results (with changed background and text colors).

At the end of the favorites list there is a button to delete all favorites at once.


## About me

 [![](https://i.imgur.com/RxMHei3.png)](https://www.linkedin.com/in/normarivas)         [![](https://i.imgur.com/C85yS6z.png)](https://twitter.com/NormaRivas_)  
 


