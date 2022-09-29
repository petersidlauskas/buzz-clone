const questionDisplay = document.querySelector('#questions')
const answerDisplay = document.querySelector('#answer')

const questions = [
    {
        id: 0,
        text: "Pick a vacation destination:",
        answers: [
            {
                text: "Queens Center Mall",
                image: "https://assets.macerichepicenter.com/FileManager/Corporate/Albums/Macerich/526/Queens-Center-4_1200x561.jpg",
                alt: "Photo of QCM",
                credit: "Gay Man "

            },
            {
                text: "Indoor Ten",
                image: "https://quartersnacks.com/wp-content/uploads/2015/02/zoo-york-todd-jordan-2003.jpg",
                alt: "Photo of the Empire State building during daytime",
                credit: "Straight Man"

            },
            {
                text: "ABC Ledges",
                image: "https://storage.googleapis.com/fsscs1/images/large/6yhqgtmlgcf1scpcaldq7oxxvf2yq2mp.jpg",
                alt: "Photo of the Empire State building during daytime",
                credit: "Ian Ried "

            },
            {
                text: "Blue Park",
                image: "https://quartersnacks.com/wp-content/uploads/2016/03/bluepark2.jpg",
                alt: "Photo of the Empire State building during daytime",
                credit: "Todd "

            }

        ]
    },
    {
        id: 1,
        text: "Pick some food:",
        answers: [
            {
                text: "Dollar Dumplings",
                image: "https://media.timeout.com/images/100718237/image.jpg",
                alt: "Dumplings",
                credit: "Gayer Man"
            },
            {
                text: "Little Ceasers Hot and Ready",
                image: "https://www.mashed.com/img/gallery/little-caesars-hot-and-ready-what-to-know-before-ordering/l-intro-1638657039.jpg",
                alt: "Pizza",
                credit: "Insane Persone"
            },
            {
                text: "Warm Beer",
                image: "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F9%2F2022%2F05%2F27%2FBest-Beers-to-Drink-at-BBQ-FT-BLOG0522.jpg&q=60",
                alt: "Warm Beer",
                credit: "Frank",
            },
            {
                text: "Cum Sock",
                image: "https://thumbs.dreamstime.com/b/dirty-sock-floor-9064751.jpg",
                alt: "Cum Sock",
                credit: "Cum Boy"
            }

        ]

    },
    {
        id: 2,
        text: "Pick a home: ",
        answers: [
            {
                text: "Bushwick shithole",
                image: "https://cms.prod.nypr.digital/images/48149/fill-640x426%7Cformat-jpeg%7Cjpegquality-80/",
                alt: "Shithole",
                credit: "Gary"
            },
            {
                text: "Psychotic minimalist apartment",
                image: "https://www.gqmiddleeast.com/public/styles/full_img_sml/public/images/2019/03/11/american-psycho-01-gq-7mar19_b.jpg",
                alt: "Minimalism",
                credit: "Crazy Patrick"
            },
            {
                text: "Junkyard",
                image: "http://prod-upp-image-read.ft.com/f97731ce-7421-11e3-beeb-00144feabdc0",
                alt: "Junkyard",
                credit: "Stinky Pete"
            },
            {
                text: "Stupid Tiny Home",
                image: "https://c1.staticflickr.com/1/94/261808145_c624e0adce_b.jpg",
                alt: "Tiny Home",
                credit: "Mr. Flipper"
            }
        ]

    }

]

const answers = [
    {
        combination: ["Queens Center Mall", "Warm Beer", "Junkyard"],
        text: "Depressed Cheese",
        image: "https://art.pixilart.com/f2a9382f39654ad.png",
        alt: "Depressed Cheese"
    },
    {
        combination: ["Indoor Ten", "Cum Sock", "Psychotic minimalist apartment"],
        text: "Retard Cheese",
        image: "https://images.squarespace-cdn.com/content/v1/583c906ebe659429d1106265/1607444814840-YFAOTC5HK54FE8L4F2FA/StinkyChesseMakeMeRun_Template_1024x1024.jpg",
        alt: "Retard Cheese"
    },
    {
        combination: ["ABC Ledges", "Dollar Dumplings", "Stupid Tiny Home"],
        text: "Gay Cheese",
        image: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/facbad8d-a799-417b-bdc1-e0bba70677be/del6l65-87397be1-4524-4ea0-99bb-93d03d5a9f52.png/v1/fill/w_350,h_347,q_80,strp/gay_cheese__by_famdonn_del6l65-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MzQ3IiwicGF0aCI6IlwvZlwvZmFjYmFkOGQtYTc5OS00MTdiLWJkYzEtZTBiYmE3MDY3N2JlXC9kZWw2bDY1LTg3Mzk3YmUxLTQ1MjQtNGVhMC05OWJiLTkzZDAzZDVhOWY1Mi5wbmciLCJ3aWR0aCI6Ijw9MzUwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.Vhz4KzBHykXC9YuN1TvCSElMxo9DVDECH3tlV4VY8Bk",
        alt: "Gay Cheese"
    },
    {
        combination: ["Blue Park", "Little Ceasers Hot and Ready", "Bushwick shithole"],
        text: "Cool Cheese",
        image: "https://c8.alamy.com/comp/2AP953Y/super-cool-emmental-cheese-character-wearing-black-glasses-2AP953Y.jpg",
        alt: "Cool Cheese"
    }


]

// need default answer


const unansweredQuestions = []
const chosenAnswers = []

const populateQuestions = () => {
    questions.forEach(question => {
        const titleBlock = document.createElement('div')
        titleBlock.id = question.id
        titleBlock.classList.add('title-block')
        const titleHeading = document.createElement('h2')
        titleHeading.textContent = question.text
        titleBlock.append(titleHeading)
        questionDisplay.append(titleBlock)

        const answersBlock = document.createElement('div')
        answersBlock.id = question.id + "-questions"
        answersBlock.classList.add('answer-options')

        unansweredQuestions.push(question.id)

        question.answers.forEach(answer => {
            const answerBlock = document.createElement('div')
            answerBlock.classList.add('answer-block')
            answerBlock.addEventListener('click' , () => handleClick(question.id, answer.text))
            const answerImage = document.createElement('img')
            answerImage.setAttribute('src', answer.image)
            answerImage.setAttribute('alt', answer.alt)

            const answerTitle = document.createElement('h3')
            answerTitle.textContent = answer.text

           const answerInfo = document.createElement('p')
           const imageLink = document.createElement('a')
           imageLink.setAttribute('href', answer.image)
           imageLink.textContent = answer.credit
           const sourceLink = document.createElement('a')
           sourceLink.textContent = 'Unsplash'
           sourceLink.setAttribute('src', 'https://www.unsplashed.com')
           answerInfo.append(imageLink, ' to ', sourceLink)

            answerBlock.append(answerImage, answerTitle, answerInfo)

            answersBlock.append(answerBlock)

        })

        questionDisplay.append(answersBlock)


    })
}
populateQuestions()

const handleClick = (questionId, chosenAnswer) => {
    if (unansweredQuestions.includes(questionId))
    chosenAnswers.push(chosenAnswer)
    const itemToRemove = unansweredQuestions.indexOf(questionId)

    if (itemToRemove > -1) {
        unansweredQuestions.splice(itemToRemove, 1)
    }

    console.log(chosenAnswers)
    console.log(unansweredQuestions)

    disableQuestionBlock(questionId, chosenAnswer)

    const lowestquestionId = Math.min(...unansweredQuestions)
    location.href = '#' + lowestquestionId

    if (!unansweredQuestions.length) {
        //scroll to answer div
        location.href = '#answer'
       showAnswer()
    }
}

const showAnswer = () => {
    let result
    answers.forEach(answer => {
        if (
            chosenAnswers.includes(answer.combination[0])+
            chosenAnswers.includes(answer.combination[1])+
            chosenAnswers.includes(answer.combination[2])
        ) {
            result = answer
        } else if(!result){
            //first answer is default
            result = answers[0]
        }
    })

    const answerBlock = document.createElement('div')
    answerBlock.classList.add('result-block')
    const answerTitle = document.createElement('h3')
    answerTitle.textContent = result.text
    const answerImage = document.createElement('img')
    answerImage.setAttribute('src', result.image)
    answerImage.setAttribute('alt', result.alt)

    answerBlock.append(answerTitle, answerImage)

    answerDisplay.append(answerBlock)

    const allAnswerBlocks = document.querySelectorAll('.answer-block')
    Array.from(allAnswerBlocks).forEach(answerBlock => answerBlock.replaceWith(answerBlock.cloneNode(true)))
}

const disableQuestionBlock = (questionId, chosenAnswer) => {
    const currentQuestionBlock = document.getElementById(questionId + "-questions")

    Array.from(currentQuestionBlock.children).forEach(block => {
        if (block.children.item(1).innerText != chosenAnswer) {
            block.style.opacity = "50%"
        }
    })
}





