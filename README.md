**HighlightOfMyChat** Display & Speak (optional) messages highlighted using Twitch Channel Points on stream!

# HighlightOfMyChat

We built this Stream Overlay to display Highlighted Message Twitch Channel Rewards live on Twitch for the Coding Cafe!

## Instafluff

> _Like these projects? The best way to support my open-source projects is by becoming a Comfy Sponsor on GitHub!_

> https://github.com/sponsors/instafluff

> _Come and hang out with us at the Comfiest Corner on Twitch!_

> https://twitch.tv/instafluff

## Instructions

Add this as a Browser Source and replace `yourchannel` with your Twitch username!

[https://www.instafluff.tv/HighlightOfMyChat?channel=yourchannel](https://www.instafluff.tv/HighlightOfMyChat?channel=YOURCHANNEL)

```
For example:
https://www.instafluff.tv/HighlightOfMyChat?channel=instafluff
```

## Optional Parameters

Optional parameters to add to the URL, multiple parameters can be chained using the `&` symbol in the URL, [see example](#Example)

### Text to Speech

`tts=true`
Enables if text is readout.
By default, this is set to `false`

### Speech Voice

`voice=Amy`
The voice the text is read out in.
By default, this is set to `Brian`

**Optional parameters**

```
Aditi   | Amy     | Astrid   | Bianca   | Brian     | Camila   | Carla
Carmen  | Celine  | Chantal  | Conchita | Cristiano | Dora     | Emma
Enrique | Ewa     | Filiz    | Geraint  | Giorgio   | Gwyneth  | Hans
Ines    | Ivy     | Jacek    | Jan      | Joanna    | Joey     | Justin
Karl    | Kendra  | Kimberly | Lea      | Liv       | Lotte    | Lucia
Lupe    | Mads    | Maja     | Marlene  | Mathieu   | Matthew  | Maxim
Mia     | Miguel  | Mizuki   | Naja     | Nicole    | Penelope | Raveena
Ricardo | Ruben   | Russell  | Salli    | Seoyeon   | Takumi   | Tatyana
Vicki   | Vitoria | Zeina    | Zhiyu
```

### Align to Bottom

`bottom=true`
Align to Bottom
By default, this is set to `false`

### Text Time

`texttimer=30000`
Time the text is displayed on screen in milliseconds.
By default, this is set to `30000`

### Sub Only

`subOnly=true`
Only read out the highlighted messages from subs
By default, this is set to `false`

### Text Limit

`limit=200`
Set a limit to the amount of text that is read out by the text to speech
By default, this is set to `null` which reeds out the entire message

Note that a Twitch message is 500 characters

### Example

```
https://www.instafluff.tv/HighlightOfMyChat?channel=instafluff&tts=true&voice=Amy&bottom=true
```

## Credits

Thank you too all the participants of this project!

**Instafluff, Instafriend, ChatTranslator, LilyHazel, That_MS_Gamer, CodingGarden, simrose4u, Gilokk0, rockysenpai24, MalForTheWin, ecomath328, wabes1, sparky_pugwash, atel0s, Clarkio, roberttables, 3duplessis, elkinforest20, caLLowCreation, dot_commie, hexploitation, ruandersMSFT, solidudeTV, imcrifty, neniltheelf, nower1111, twallace123, 10TenArt, QeraiX, ummmheck, merkurrz, Jormunduur, DoctorArgus, Agent_Merlin, Crypticals, MaryJoStaebler, JackSkely, 技术宅, FuriousFur, mrbinary001, DutchGamer46, AntiPixelated, SausageCam, Gorogokvi, Kung_Josef, ShinSharkai, crazychick2019, Outlaw_Dan, edorfaus, FalinDur, guthron, HexaDonut, joelbyrd, itscoderslife, BearlyKnowU, vincentmet, HeffU, kinbiko, CJzone, ahh_maggie_no, jawibae, malfunct, RIKACHET, Atndesign, extraxterrestrial, 47_billy, TheHugoDahl, taybietayyaab, skkreet64, aj2017, MrDemonWolf, ShadowNeverSeen, Maayainsane, holloway87, Rosuav, Aranel96, Cloudhun, Ellenary, fikapaus, chipdouglaz, FriskyFrogg, Jah2369, trax314, Markisska7, ArrowPlusKnee, Linol_Shadowcat, SoG_Cuicui, TripleMused, yumimilk, AP4TV, Slimenian, MsSaltyGiggles, Songfox, eateren, memes_4_life\_\_\_, Luxadin, NiteCrawla, C4TFive, itsDeke**
