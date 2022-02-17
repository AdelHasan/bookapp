
const BookCard = () => {
  const sampleData = {
    "kind": "books#volume",
    "id": "DvhrDwAAQBAJ",
    "etag": "HJffNg9fG7M",
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
  
  // Map over API return data
  // For each entry return a div with the following components
  // Perhaps a separate component in which these are arranged and displayed, then import THAT into App.js
  // 

  return (
    <div className="card">
      <h2>{sampleData.volumeInfo.title}</h2>
      <img src={sampleData.volumeInfo.imageLinks.smallThumbnail} />
      <h3>{sampleData.volumeInfo.subtitle}</h3>
      <p>{sampleData.volumeInfo.authors[0]}</p>
      <p>{sampleData.volumeInfo.authors[1]}</p>
      
    </div>
  )
}

export default BookCard