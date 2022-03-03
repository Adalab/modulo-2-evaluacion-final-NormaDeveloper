
# Anime series search engine web application

## **Module 2 of Adalab Bootcamp: Final assessment exercise**

## Project developed with: 
### 1. Attention to detail 🔎
### 2. Clean and tidy code 🧹
### 3. Fun 🎉 <br> <br> 




![](https://i.imgur.com/zehbmMj.png)
![](https://i.imgur.com/soz1DM9.png)

## Assignment

The exercise consists of developing a web application to search for anime series, which allows us to un/mark series as favorites and save them in local storage.

### Tech stack and Tools




 <img align="center" width="80" height="80" src="https://user-images.githubusercontent.com/93437541/156563865-89991fe0-b1da-4e87-8d38-b949c509aec6.png">  <img align="center" width="80" height="80" src="https://user-images.githubusercontent.com/93437541/156563813-c86d054a-c147-4383-922b-82374df32c40.png">  <img align="center" width="80" height="80" src="https://user-images.githubusercontent.com/93437541/156564233-97665e0a-c16d-420e-8a3a-4a7ab907e2d9.png">       <img align="center" width="80" height="80" src="https://i.imgur.com/DUSAfBX.png">  <img align="center" width="80" height="80" src="https://user-images.githubusercontent.com/93437541/156568386-6790aadb-6a49-413f-9a74-c57dbef957e4.png">       <img align="center" width="80" height="70" src="https://i.imgur.com/kWq3QjI.png">     <img align="center" width="110" height="30" src="https://user-images.githubusercontent.com/93437541/156565270-548afb97-c5ff-4922-86be-b89e47b42b83.jpeg">

<img align="center" width="80" height="80" src="https://user-images.githubusercontent.com/93437541/156563722-aa6d9f88-17c1-4e98-93f6-54ac474a30ea.png">   <img align="center" width="70" height="70" src="https://i.imgur.com/MC0RQSX.png">       <img align="center" width="80" height="80" src="https://user-images.githubusercontent.com/93437541/156564367-9bec5df6-bad3-4dfc-b66e-cda04a6ad7c3.png">     <img align="center" width="80" height="70" src="https://user-images.githubusercontent.com/93437541/156564552-d8582ce3-91c8-400b-9779-b18cd9e08ac7.png">    




<img align="center" width="80" height="80" src="https://i.imgur.com/cYleJs5.png">    <img align="center" width="80" height="80" src="https://user-images.githubusercontent.com/93437541/156566142-c2800ce7-c17b-4318-8a32-09c96c9c7664.svg">        <img align="center" width="60" height="60" src="https://user-images.githubusercontent.com/93437541/156566325-442c9417-50fb-4dcb-b49f-964aa871d9f2.png">      



   <img align="center" width="100" height="60" src="https://user-images.githubusercontent.com/93437541/156566653-a6e5eb39-4a80-4563-9ced-81528d292fe4.png">     <img align="center" width="70" height="70" src="https://user-images.githubusercontent.com/93437541/156567140-3761f735-891f-4c82-98d7-990bd62b5a6e.png">  




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
 


