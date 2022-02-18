# General Assembly SEIR 110-WC Project 2 - Research Launchpad

## Project Links

- [Github Pages](https://adelhasan.github.io/bookapp/)

## Project Description
- In this project I will build a responsive UI using react and data drawn from the Google Books API
- The project will be built mobile first, with responsive adjustment to the page for tablet and desktop views
- The UI will allow users to search for titles, and return book card components for each returned query. These will provide an overview of the title, along with a link to a component that renders detailed information on a selected title
- I would also like to incorporate the embedded viewer API to allow users to read available portions of the title within the app itself
- I also aim to provide library management features to allow users to manage and interact with their own Google Books library from the app



## API

https://www.googleapis.com/books/v1/volumes?q=tree&key=AIzaSyDgs0P5NgyAp6l1iSp--NyhrT9MmDa1U9k

Below is a sample of data provided on each volume from the above API request

```
{
    "kind": "books#volume",
    "id": "DvhrDwAAQBAJ",
    "etag": "t0bFEEs04JA",
    "selfLink": "https://www.googleapis.com/books/v1/volumes/DvhrDwAAQBAJ",
    "volumeInfo": {
        "title": "The Tree Book",
        "subtitle": "Superior Selections for Landscapes, Streetscapes, and Gardens",
        "authors": [
            "Michael A. Dirr",
            "Keith S. Warren"
        ],
        "publisher": "Timber Press",
        "publishedDate": "2019-04-30",
        "description": "“A boon to all those who plant, care for, and love trees.”—Nina Bassuk, author of Trees in the Urban Landscape The Tree Book is the go-to reference to more than 2,400 species and cultivars, from two of the biggest names in horticulture—Michael A. Dirr and Keith S. Warren. The featured trees include those widely available in the nursery trade, some new and promising choices, and a selection of overlooked options that deserve renewed interest. Each tree profile includes the common and botanical names along with details on foliage; flowers, seeds, fruits, and cones; native range; adaptability; and popular uses in landscapes. The Tree Book is a must-have resource for landscape architects, city foresters, horticulturists, and enthusiastic home gardeners.",
        "industryIdentifiers": [
            {
                "type": "ISBN_13",
                "identifier": "9781604699180"
            },
            {
                "type": "ISBN_10",
                "identifier": "1604699183"
            }
        ],
        "readingModes": {
            "text": true,
            "image": true
        },
        "pageCount": 900,
        "printType": "BOOK",
        "categories": [
            "Gardening"
        ],
        "maturityRating": "NOT_MATURE",
        "allowAnonLogging": true,
        "contentVersion": "1.2.1.0.preview.3",
        "panelizationSummary": {
            "containsEpubBubbles": false,
            "containsImageBubbles": false
        },
        "imageLinks": {
            "smallThumbnail": "http://books.google.com/books/content?id=DvhrDwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
            "thumbnail": "http://books.google.com/books/content?id=DvhrDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
        },
        "language": "en",
        "previewLink": "http://books.google.com/books?id=DvhrDwAAQBAJ&printsec=frontcover&dq=tree&hl=&cd=1&source=gbs_api",
        "infoLink": "https://play.google.com/store/books/details?id=DvhrDwAAQBAJ&source=gbs_api",
        "canonicalVolumeLink": "https://play.google.com/store/books/details?id=DvhrDwAAQBAJ"
    },
    "saleInfo": {
        "country": "US",
        "saleability": "FOR_SALE",
        "isEbook": true,
        "listPrice": {
            "amount": 30.95,
            "currencyCode": "USD"
        },
        "retailPrice": {
            "amount": 17.02,
            "currencyCode": "USD"
        },
        "buyLink": "https://play.google.com/store/books/details?id=DvhrDwAAQBAJ&rdid=book-DvhrDwAAQBAJ&rdot=1&source=gbs_api",
        "offers": [
            {
                "finskyOfferType": 1,
                "listPrice": {
                    "amountInMicros": 30950000,
                    "currencyCode": "USD"
                },
                "retailPrice": {
                    "amountInMicros": 17020000,
                    "currencyCode": "USD"
                },
                "giftable": true
            }
        ]
    },
    "accessInfo": {
        "country": "US",
        "viewability": "PARTIAL",
        "embeddable": true,
        "publicDomain": false,
        "textToSpeechPermission": "ALLOWED",
        "epub": {
            "isAvailable": true,
            "acsTokenLink": "http://books.google.com/books/download/The_Tree_Book-sample-epub.acsm?id=DvhrDwAAQBAJ&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
        },
        "pdf": {
            "isAvailable": true,
            "acsTokenLink": "http://books.google.com/books/download/The_Tree_Book-sample-pdf.acsm?id=DvhrDwAAQBAJ&format=pdf&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
        },
        "webReaderLink": "http://play.google.com/books/reader?id=DvhrDwAAQBAJ&hl=&printsec=frontcover&source=gbs_api",
        "accessViewStatus": "SAMPLE",
        "quoteSharingAllowed": false
    },
    "searchInfo": {
        "textSnippet": "The Tree Book is a must-have resource for landscape architects, city foresters, horticulturists, and enthusiastic home gardeners."
    }
}
```


## Wireframes


- [wireframes](https://imgur.com/a/RugYkTK)
- [react architecture](https://imgur.com/a/ym7QO1T)


### MVP/PostMVP - 5min



#### MVP
- Search and view correctly formatted book cards
- Library management and display user's own bookshelves
- Reponsive Design for Mobile, Tablet and Desktop
- Correct implementation of State
- React Router to navigate between search and library pages
- 5 functional components

#### PostMVP

- Embedded Reader
- Ability to store notes/snippets from books

## Components


Based on the initial logic defined in the previous sections try and breakdown the logic further into stateless/stateful components. 

| Component | Description | 
| --- | :---: |  
| App | Sets up app with React Router | 
| Header | Renders the header, including the nav | 
| Footer | Renders the footer |
| Book Card | Renders Cards for each volume |
| Detailed Book View | Renders Detailed view for a selected volume |
| Search Box | Renders search bar that makes API request with input query |
| Reader | Renders embedded reader view for selected volume |


## Timeframes

| Component | Priority | Estimated Time | Time Invetsted | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Create React app and component files, initialize Router | H | 1 | 1 | TBD |
| Boilerplate UI (Header, Footer, Nav) | H | 2 | 3.5 | TBD |
| Generate API requests that render appropriate data | H | 3 | 3 | TBD |
| Incorporate API requests into functional search component | H | 2 | 7 | TBD |
| Build Card Components to render Book Data | H | 2 | 4 | TBD |
| Build Detailed View for Books | H | 2 | TBD | TBD |
| Incorporate User Library (with OAauth 2.0 authentication) | H | 5 | TBD | TBD |
| Instantiate Routes for Search, Library, Reader | H | 3 | 2 | TBD |
| Polish UI: Colors, Fonts, Display indiscrepancies etc. | H | 2 | 2.5 | TBD |
| Total | H | 22 | TBD | TBD |

## Additional Libraries
- Bootstrap
- React Router
- 

## Code Snippet

This small piece of code eliminated a roadblock to making my search update upon enter. I used the useEffect hook to update my list with the books (search) prop, with the books prop as the second parameter.


```
useEffect(() => {
    setList(books);
  }, [books]);
```
