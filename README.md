TinderKeywordSwiper
===============

The premise for this experiment is to run each image of a tinder 'potential match' against the clarifai.com image API analysis, and 'liking' the entry if it matches certain criteria. I'm going to start with something basic like black men/women vs. white men/women to see how accurate the results are from clarafai (they are actually amazingly good at this stuff, I think skin-tone will be able to be grokked easily and will hopefully be a keyword in the return). 

###Quick Payload Example
This is an example of what clarafai can do with a generic picture of a white woman vs. a generic picture of a black women. I literally google image searched 'white woman' and 'black woman'. From my immediate experience, I think the 'multiethnic' keyword will play a big part in things. Anyways, here's the example:
![white woman vs. black woman](http://i.imgur.com/J1TXdzS.jpg)


###Plan of Attack
It's crazy simple to log every Tinder API request through your cellphone using Fiddler as a go-between to capture and decrypt the requests. Each request contains publicly hosted images through Tinder's CDN that we can store. For each stored image we get on 'proximity' matches, we asynchronously run each image through clarafai to see if it returns/matches our positive or negative keywords to determine whether or not to swipe right or left. This kind of thing will benefit from more and more data to be able to get a feel for how clarafai categorizes things (They obviously want their keywords to be 100% politically correct. Instead of 'black', they say 'ethnic' or 'multiethnic'. This is a huge deal because any trace of prejudice will trigger back-lash from their millions of users - so we have to kind of figure out what they decide to represent common terms as). Ramble, Ramble, ramble........  ramble.
