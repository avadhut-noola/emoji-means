const emojipedia = [
      {
        "id": 1,
        "emoji": "😀",
        "name": "Grinning Face",
        "category": "Smileys",
        "meaning": "A big, open-mouthed smile expressing genuine happiness and positive energy. Often used to convey general excitement or good vibes."
      },
      {
        "id": 2,
        "emoji": "😃",
        "name": "Grinning Face with Big Eyes",
        "category": "Smileys",
        "meaning": "An enthusiastic smile with wide, open eyes showing heightened excitement or pleasant surprise. Perfect for expressing extra cheerfulness."
      },
      {
        "id": 3,
        "emoji": "😄",
        "name": "Grinning Face with Smiling Eyes",
        "category": "Smileys",
        "meaning": "A warm, friendly smile with eyes scrunched in delight. Indicates heartfelt happiness where the joy reaches the eyes."
      },
      {
        "id": 4,
        "emoji": "😁",
        "name": "Beaming Face with Smiling Eyes",
        "category": "Smileys",
        "meaning": "A proud, satisfied grin with squinted eyes. Used when feeling particularly pleased with oneself or when sharing excellent news."
      },
      {
        "id": 5,
        "emoji": "😆",
        "name": "Grinning Squinting Face",
        "category": "Smileys",
        "meaning": "A face scrunched up in uncontrollable laughter with eyes squeezed shut. Represents something so funny it makes you close your eyes while laughing."
      },
      {
        "id": 6,
        "emoji": "😅",
        "name": "Grinning Face with Sweat",
        "category": "Smileys",
        "meaning": "A smiling face with a single bead of sweat. Represents relieved laughter after a close call or awkward situation."
      },
      {
        "id": 7,
        "emoji": "🤣",
        "name": "Rolling on the Floor Laughing",
        "category": "Smileys",
        "meaning": "Hysterical laughter so intense you're rolling around laughing. Used for something extremely funny that causes uncontrollable amusement."
      },
      {
        "id": 8,
        "emoji": "😂",
        "name": "Face with Tears of Joy",
        "category": "Smileys",
        "meaning": "Laughing so hard that tears are streaming down. The ultimate expression of finding something absolutely hilarious."
      },
      {
        "id": 9,
        "emoji": "🙂",
        "name": "Slightly Smiling Face",
        "category": "Smileys",
        "meaning": "A gentle, subtle smile suggesting basic contentment or politeness when full enthusiasm isn't quite warranted."
      },
      {
        "id": 10,
        "emoji": "🙃",
        "name": "Upside-Down Face",
        "category": "Smileys",
        "meaning": "A face turned upside down, representing silliness, sarcasm, or passive aggression. Often used when something isn't going as expected but you're trying to stay positive."
      },
      {
        "id": 11,
        "emoji": "😉",
        "name": "Winking Face",
        "category": "Smileys",
        "meaning": "A face with one eye closed in a wink. Signals jest, flirtation, or an inside joke that shouldn't be taken too seriously."
      },
      {
        "id": 12,
        "emoji": "😊",
        "name": "Smiling Face with Smiling Eyes",
        "category": "Smileys",
        "meaning": "A warm, genuine smile showing affection, gratitude, or contentment. The smile reaches the eyes, indicating sincerity."
      },
      {
        "id": 13,
        "emoji": "😇",
        "name": "Smiling Face with Halo",
        "category": "Smileys",
        "meaning": "An angelic smile with a golden halo, suggesting innocence or good deeds. Can be sincere or ironic when pretending to be overly virtuous."
      },
      {
        "id": 14,
        "emoji": "🥰",
        "name": "Smiling Face with Hearts",
        "category": "Smileys",
        "meaning": "A face surrounded by hearts, expressing adoration, gratitude, and warm fuzzy feelings of love or deep appreciation."
      },
      {
        "id": 15,
        "emoji": "😍",
        "name": "Smiling Face with Heart-Eyes",
        "category": "Smileys",
        "meaning": "A face with hearts for eyes, showing passionate admiration, infatuation, or intense love for something or someone."
      },
      {
        "id": 16,
        "emoji": "🤩",
        "name": "Star-Struck",
        "category": "Smileys",
        "meaning": "A face with star eyes expressing excitement over celebrities, achievements, or something amazing that leaves you awestruck with admiration."
      },
      {
        "id": 17,
        "emoji": "😘",
        "name": "Face Blowing a Kiss",
        "category": "Smileys",
        "meaning": "A face with puckered lips sending a kiss, conveying affection, gratitude, or farewells with a loving touch."
      },
      {
        "id": 18,
        "emoji": "😗",
        "name": "Kissing Face",
        "category": "Smileys",
        "meaning": "A face with puckered lips but neutral eyes, showing a friendly, non-romantic kiss often used as a greeting or gesture of appreciation."
      },
      {
        "id": 19,
        "emoji": "☺️",
        "name": "Smiling Face",
        "category": "Smileys",
        "meaning": "A classic warm smile expressing authentic happiness and peaceful contentment without intensity or exaggeration."
      },
      {
        "id": 20,
        "emoji": "😚",
        "name": "Kissing Face with Closed Eyes",
        "category": "Smileys",
        "meaning": "A face with puckered lips and gently closed eyes, expressing affection, tenderness, or romantic appreciation."
      },
      {
        "id": 21,
        "emoji": "😙",
        "name": "Kissing Face with Smiling Eyes",
        "category": "Smileys",
        "meaning": "A face with puckered lips and smiling eyes, showing playful affection combined with happiness."
      },
      {
        "id": 22,
        "emoji": "🥲",
        "name": "Smiling Face with Tear",
        "category": "Smileys",
        "meaning": "A smile with a single tear, representing gratitude during difficult times or finding beauty in sadness. Bittersweet emotions."
      },
      {
        "id": 23,
        "emoji": "😋",
        "name": "Face Savoring Food",
        "category": "Smileys",
        "meaning": "A happy face licking its lips, expressing enjoyment of delicious food or anticipation of something enticing or pleasurable."
      },
      {
        "id": 24,
        "emoji": "😛",
        "name": "Face with Tongue",
        "category": "Smileys",
        "meaning": "A playful face with tongue sticking out, suggesting silliness, teasing, or playful mischief without serious intent."
      },
      {
        "id": 25,
        "emoji": "😜",
        "name": "Winking Face with Tongue",
        "category": "Smileys",
        "meaning": "A face with tongue out and winking eye, representing playful joking with a hint of mischief or not taking things seriously."
      },
      {
        "id": 26,
        "emoji": "🤪",
        "name": "Zany Face",
        "category": "Smileys",
        "meaning": "A face with one large and one small eye and tongue out, representing wild energy, silliness, or eccentric behavior."
      },
      {
        "id": 27,
        "emoji": "😝",
        "name": "Squinting Face with Tongue",
        "category": "Smileys",
        "meaning": "A face with tightly closed eyes and tongue out, expressing extreme silliness or goofy attitude along with intense humor."
      },
      {
        "id": 28,
        "emoji": "🤑",
        "name": "Money-Mouth Face",
        "category": "Smileys",
        "meaning": "A face with dollar sign eyes and money tongue, representing wealth, luxury, or excitement about financial gain or opportunities."
      },
      {
        "id": 29,
        "emoji": "🤗",
        "name": "Hugging Face",
        "category": "Smileys",
        "meaning": "A face with open hands, as if giving a hug, expressing support, love, or warmth when comforting someone or showing affection."
      },
      {
        "id": 30,
        "emoji": "🤭",
        "name": "Face with Hand Over Mouth",
        "category": "Smileys",
        "meaning": "A face with hand covering smile, representing surprise, coyness, or hiding amusement at something inappropriate or scandalous."
      },
      {
        "id": 31,
        "emoji": "🤫",
        "name": "Shushing Face",
        "category": "Smileys",
        "meaning": "A face with finger over lips, requesting silence or indicating a secret that shouldn't be shared widely."
      },
      {
        "id": 32,
        "emoji": "🤔",
        "name": "Thinking Face",
        "category": "Smileys",
        "meaning": "A face with hand on chin, representing deep contemplation, skepticism, or puzzling over a complex situation or idea."
      },
      {
        "id": 33,
        "emoji": "🤐",
        "name": "Zipper-Mouth Face",
        "category": "Smileys",
        "meaning": "A face with a zipper for a mouth, indicating secrecy, inability to speak about something, or forced silence on a sensitive topic."
      },
      {
        "id": 34,
        "emoji": "🤨",
        "name": "Face with Raised Eyebrow",
        "category": "Smileys",
        "meaning": "A face with one eyebrow raised, expressing skepticism, disbelief, or questioning someone's statement or actions."
      },
      {
        "id": 35,
        "emoji": "😐",
        "name": "Neutral Face",
        "category": "Smileys",
        "meaning": "A face with flat, closed mouth and neutral eyes, showing emotional detachment, ambivalence, or withholding judgment."
      },
      {
        "id": 36,
        "emoji": "😑",
        "name": "Expressionless Face",
        "category": "Smileys",
        "meaning": "A face with straight line for mouth and expressionless eyes, conveying deadpan emotions, disinterest, or silent disapproval."
      },
      {
        "id": 37,
        "emoji": "😶",
        "name": "Face Without Mouth",
        "category": "Smileys",
        "meaning": "A face with no mouth, representing speechlessness, inability to express oneself, or carefully withholding comments."
      },
      {
        "id": 38,
        "emoji": "😏",
        "name": "Smirking Face",
        "category": "Smileys",
        "meaning": "A face with a sly, smug, or suggestive half-smile, indicating flirtation, innuendo, or satisfaction at knowing something others don't."
      },
      {
        "id": 39,
        "emoji": "😒",
        "name": "Unamused Face",
        "category": "Smileys",
        "meaning": "A face with slight frown and eyes looking to the side, showing dissatisfaction, skepticism, or mild irritation at a situation."
      },
      {
        "id": 40,
        "emoji": "🙄",
        "name": "Face with Rolling Eyes",
        "category": "Smileys",
        "meaning": "A face with eyes looking upward in an exaggerated roll, expressing exasperation, disbelief, or mild frustration at something ridiculous."
      },
      {
        "id": 41,
        "emoji": "😬",
        "name": "Grimacing Face",
        "category": "Smileys",
        "meaning": "A face with gritted teeth and tense expression, showing awkwardness, nervousness, or discomfort in an uncomfortable situation."
      },
      {
        "id": 42,
        "emoji": "🤥",
        "name": "Lying Face",
        "category": "Smileys",
        "meaning": "A face with long Pinocchio-like nose, representing dishonesty, untruths, or catching someone in a lie."
      },
      {
        "id": 43,
        "emoji": "😌",
        "name": "Relieved Face",
        "category": "Smileys",
        "meaning": "A face with calm closed eyes and slight smile, showing serenity, contentment, or relief after stress has passed."
      },
      {
        "id": 44,
        "emoji": "😔",
        "name": "Pensive Face",
        "category": "Smileys",
        "meaning": "A face with slightly frowning mouth and sad, thoughtful eyes expressing disappointment, regret, or quiet sadness."
      },
      {
        "id": 45,
        "emoji": "😪",
        "name": "Sleepy Face",
        "category": "Smileys",
        "meaning": "A drowsy face with a small bubble from the nose indicating extreme tiredness or boredom to the point of dozing off."
      },
      {
        "id": 46,
        "emoji": "🤤",
        "name": "Drooling Face",
        "category": "Smileys",
        "meaning": "A face with drool dripping from one side of the mouth, representing extreme desire, hunger, or coveting something irresistible."
      },
      {
        "id": 47,
        "emoji": "😴",
        "name": "Sleeping Face",
        "category": "Smileys",
        "meaning": "A peaceful face with closed eyes and zzz above, indicating sound sleep, extreme tiredness, or boredom with a conversation."
      },
      {
        "id": 48,
        "emoji": "😷",
        "name": "Face with Medical Mask",
        "category": "Smileys",
        "meaning": "A face wearing a surgical mask, indicating illness, preventing spread of germs, or protecting oneself during health concerns."
      },
      {
        "id": 49,
        "emoji": "🤒",
        "name": "Face with Thermometer",
        "category": "Smileys",
        "meaning": "A face with thermometer in mouth, showing fever, illness, or feeling sick enough to take one's temperature."
      },
      {
        "id": 50,
        "emoji": "🤕",
        "name": "Face with Head-Bandage",
        "category": "Smileys",
        "meaning": "A face with bandaged head, representing physical injury, accident, or recovering from a medical procedure."
      },
      {
        "id": 51,
        "emoji": "🤢",
        "name": "Nauseated Face",
        "category": "Smileys",
        "meaning": "A sickly green face expressing disgust, revulsion, or physical illness to the point of feeling queasy."
      },
      {
        "id": 52,
        "emoji": "🤮",
        "name": "Face Vomiting",
        "category": "Smileys",
        "meaning": "A face with projectile vomit, showing extreme disgust, severe illness, or intense revulsion at something unbearable."
      },
      {
        "id": 53,
        "emoji": "🤧",
        "name": "Sneezing Face",
        "category": "Smileys",
        "meaning": "A face mid-sneeze with tissue, indicating allergies, common cold, or being affected by something irritating in the environment."
      },
      {
        "id": 54,
        "emoji": "🥵",
        "name": "Hot Face",
        "category": "Smileys",
        "meaning": "A flushed red face with tongue out, conveying extreme heat, physical overexertion, or feeling overwhelmed by spicy food."
      },
      {
        "id": 55,
        "emoji": "🥶",
        "name": "Cold Face",
        "category": "Smileys",
        "meaning": "A blue face with icicles and chattering teeth, representing freezing temperatures, winter weather, or emotional coldness."
      },
      {
        "id": 56,
        "emoji": "🥴",
        "name": "Woozy Face",
        "category": "Smileys",
        "meaning": "A face with uneven eyes and wavy mouth, suggesting intoxication, dizziness, confusion or being overwhelmed by complex information."
      },
      {
        "id": 57,
        "emoji": "😵",
        "name": "Dizzy Face",
        "category": "Smileys",
        "meaning": "A face with spiral eyes, representing extreme confusion, shock, or feeling literally or figuratively knocked out by surprising news."
      },
      {
        "id": 58,
        "emoji": "🤯",
        "name": "Exploding Head",
        "category": "Smileys",
        "meaning": "A face with top of head exploding, expressing mind-blown feelings from shocking revelations or information overload."
      },
      {
        "id": 59,
        "emoji": "🤠",
        "name": "Cowboy Hat Face",
        "category": "Smileys",
        "meaning": "A face wearing a western-style cowboy hat, embodying adventure, frontier spirit, or carefree confidence with Wild West energy."
      },
      {
        "id": 60,
        "emoji": "🥳",
        "name": "Partying Face",
        "category": "Smileys",
        "meaning": "A face with party horn and party hat, celebrating special occasions, achievements, or bringing festive energy to conversations."
      },
      {
        "id": 61,
        "emoji": "🥸",
        "name": "Disguised Face",
        "category": "Smileys",
        "meaning": "A face wearing groucho glasses with nose, mustache and eyebrows, representing disguise, anonymity, or trying to hide one's identity."
      },
      {
        "id": 62,
        "emoji": "😎",
        "name": "Smiling Face with Sunglasses",
        "category": "Smileys",
        "meaning": "A cool face wearing sunglasses, exuding confidence, nonchalance, or acknowledging something awesome or impressive."
      },
      {
        "id": 63,
        "emoji": "🤓",
        "name": "Nerd Face",
        "category": "Smileys",
        "meaning": "A face with big glasses and buck teeth, representing intelligence, studiousness, or enthusiasm for academic or technical subjects."
      },
      {
        "id": 64,
        "emoji": "🧐",
        "name": "Face with Monocle",
        "category": "Smileys",
        "meaning": "A face with a single eyeglass, suggesting scrutiny, detailed examination, or sophisticated analysis of a situation."
      },
      {
        "id": 65,
        "emoji": "😕",
        "name": "Confused Face",
        "category": "Smileys",
        "meaning": "A face with slightly furrowed brow and downturned mouth, showing confusion, uncertainty, or mild dissatisfaction with a situation."
      },
      {
        "id": 66,
        "emoji": "😟",
        "name": "Worried Face",
        "category": "Smileys",
        "meaning": "A concerned face with furrowed brow and slight frown, expressing anxiety, distress, or apprehension about a situation."
      },
      {
        "id": 67,
        "emoji": "🙁",
        "name": "Slightly Frowning Face",
        "category": "Smileys",
        "meaning": "A face with gentle downturned mouth, showing mild disappointment, sadness, or disapproval without intense negativity."
      },
      {
        "id": 68,
        "emoji": "☹️",
        "name": "Frowning Face",
        "category": "Smileys",
        "meaning": "A face with strongly downturned mouth, expressing unhappiness, disappointment, or dismay about a situation."
      },
      {
        "id": 69,
        "emoji": "😮",
        "name": "Face with Open Mouth",
        "category": "Smileys",
        "meaning": "A surprised face with wide open mouth, showing astonishment, shock, or sudden realization of unexpected information."
      },
      {
        "id": 70,
        "emoji": "😯",
        "name": "Hushed Face",
        "category": "Smileys",
        "meaning": "A surprised face with wide eyes and small, round mouth, expressing quiet shock, disbelief, or speechless amazement."
      },
      {
        "id": 71,
        "emoji": "😲",
        "name": "Astonished Face",
        "category": "Smileys",
        "meaning": "A face with wide open mouth and eyes, showing intense surprise, amazement, or shock at unexpected revelations."
      },
      {
        "id": 72,
        "emoji": "😳",
        "name": "Flushed Face",
        "category": "Smileys",
        "meaning": "A face with wide eyes and red cheeks, expressing embarrassment, sudden unexpected attention, or feeling put on the spot."
      },
      {
        "id": 73,
        "emoji": "🥺",
        "name": "Pleading Face",
        "category": "Smileys",
        "meaning": "A face with big glossy eyes and slight frown, making a heart-melting expression of begging, beseeching, or seeking sympathy."
      },
      {
        "id": 74,
        "emoji": "😦",
        "name": "Frowning Face with Open Mouth",
        "category": "Smileys",
        "meaning": "A face with downturned eyebrows and open mouth, showing dismay combined with surprise or shock at unexpected negative developments."
      },
      {
        "id": 75,
        "emoji": "😧",
        "name": "Anguished Face",
        "category": "Smileys",
        "meaning": "A deeply distressed face with raised eyebrows and open grimacing mouth, expressing suffering, intense concern, or painful empathy."
      },
      {
        "id": 76,
        "emoji": "😨",
        "name": "Fearful Face",
        "category": "Smileys",
        "meaning": "A scared face with raised eyebrows and open mouth, showing fear, alarm, or sudden shock at a frightening situation."
      },
      {
        "id": 77,
        "emoji": "😰",
        "name": "Anxious Face with Sweat",
        "category": "Smileys",
        "meaning": "A face with open mouth, raised eyebrows and sweat, representing intense nervousness, anxiety, or distress in a tense situation."
      },
      {
        "id": 78,
        "emoji": "😥",
        "name": "Sad but Relieved Face",
        "category": "Smileys",
        "meaning": "A face with downturned mouth and bead of sweat, representing disappointment mixed with relief that something wasn't worse."
      },
      {
        "id": 79,
        "emoji": "😢",
        "name": "Crying Face",
        "category": "Smileys",
        "meaning": "A sad face with a single tear, expressing moderate sadness, disappointment, or sympathy for someone else's pain."
      },
      {
        "id": 80,
        "emoji": "😭",
        "name": "Loudly Crying Face",
        "category": "Smileys",
        "meaning": "A face with streams of tears and open mouth, indicating intense crying, overwhelming grief, or uncontrollable emotional outpouring."
      },
      {
        "id": 81,
        "emoji": "😱",
        "name": "Face Screaming in Fear",
        "category": "Smileys",
        "meaning": "A face inspired by 'The Scream' painting with hands on cheeks, expressing extreme terror, shock, or overwhelming panic."
      },
      {
        "id": 82,
        "emoji": "😖",
        "name": "Confounded Face",
        "category": "Smileys",
        "meaning": "A face with scrunched, closed eyes and downturned mouth, showing frustration, embarrassment, or extreme disappointment."
      },
      {
        "id": 83,
        "emoji": "😣",
        "name": "Persevering Face",
        "category": "Smileys",
        "meaning": "A face with scrunched eyes and tight mouth, showing determination during hardship or struggling through a difficult challenge."
      },
      {
        "id": 84,
        "emoji": "😞",
        "name": "Disappointed Face",
        "category": "Smileys",
        "meaning": "A face with downcast eyes and frown, expressing despondency, rejection, or personal failure without dramatic intensity."
      },
      {
        "id": 85,
        "emoji": "😓",
        "name": "Downcast Face with Sweat",
        "category": "Smileys",
        "meaning": "A face with downcast eyes and a bead of sweat, showing regret, shame, or embarrassment after making a mistake."
      },
      {
        "id": 86,
        "emoji": "😩",
        "name": "Weary Face",
        "category": "Smileys",
        "meaning": "A face with closed eyes and open mouth expressing exhaustion, exasperation, or feeling completely drained by life's demands."
      },
      {
        "id": 87,
        "emoji": "😫",
        "name": "Tired Face",
        "category": "Smileys",
        "meaning": "A face with pinched eyes and open frowning mouth showing complete exhaustion, frustration, or being at one's absolute limit."
      },
      {
        "id": 88,
        "emoji": "🥱",
        "name": "Yawning Face",
        "category": "Smileys",
        "meaning": "A face with mouth wide open mid-yawn, indicating tiredness, boredom, or finding something tediously uninteresting."
      },
      {
        "id": 89,
        "emoji": "😤",
        "name": "Face with Steam From Nose",
        "category": "Smileys",
        "meaning": "A face with steam puffing from the nose, showing indignation, determined triumph, or frustrated anger after being provoked."
      },
      {
        "id": 90,
        "emoji": "😡",
        "name": "Pouting Face",
        "category": "Smileys",
        "meaning": "A red face with angry expression and furrowed brows, showing rage, intense anger, or extreme frustration at a situation."
      },
      {
        "id": 91,
        "emoji": "😠",
        "name": "Angry Face",
        "category": "Smileys",
        "meaning": "A face with furrowed brows and pursed lips, expressing anger, irritation, or annoyance that hasn't reached boiling point."
      },
      {
        "id": 92,
        "emoji": "🤬",
        "name": "Face with Symbols on Mouth",
        "category": "Smileys",
        "meaning": "A red face with symbols covering the mouth, indicating extreme anger, profanity, or censored swearing in heated moments."
      },
      {
        "id": 93,
        "emoji": "😈",
        "name": "Smiling Face with Horns",
        "category": "Smileys",
        "meaning": "A mischievous purple face with horns and smiling, representing playful trouble-making, light villainy, or temptation."
      },
      {
        "id": 94,
        "emoji": "👿",
        "name": "Angry Face with Horns",
        "category": "Smileys",
        "meaning": "A purple devil face with angry expression, representing genuine malice, harmful intent, or more serious wickedness."
      },
      {
        "id": 95,
        "emoji": "💀",
        "name": "Skull",
        "category": "Smileys",
        "meaning": "A human skull, representing death, danger, poison warnings, or extreme metaphorical reactions like 'dying of embarrassment'."
      },
      {
        "id": 96,
        "emoji": "☠️",
        "name": "Skull and Crossbones",
        "category": "Smileys",
        "meaning": "A skull with crossed bones beneath, symbolizing poison, lethal danger, or piracy and frequently used as a warning symbol."
      },
      {
        "id": 97,
        "emoji": "💩",
        "name": "Pile of Poo",
        "category": "Smileys",
        "meaning": "A smiling pile of poop, used for gross humor, discussing something of poor quality, or as a goofy way to show something's terrible."
      },
      {
        "id": 98,
        "emoji": "🤡",
        "name": "Clown Face",
        "category": "Smileys",
        "meaning": "A classic circus clown face with colorful hair, representing entertainment, foolishness, or sometimes creepiness after horror movies popularized scary clowns."
      },
      {
        "id": 99,
        "emoji": "👹",
        "name": "Ogre",
        "category": "Smileys",
        "meaning": "A red Japanese ogre mask (oni) with horns and angry expression, representing monsters, demons, or intimidating figures from folklore."
      },
      {
        "id": 100,
        "emoji": "👺",
        "name": "Goblin",
        "category": "Smileys",
        "meaning": "A red Japanese tengu mask with long nose, representing mythological creatures, goblins, or tricksters with malicious intentions."
      },
      {
        "id": 101,
        "emoji": "\u{1F47A}",
        "name": "Japanese Goblin",
        "category": "Smileys",
        "meaning": "A red face with an elongated nose, representing Japanese folklore creatures known as tengu, symbolizing mischief and supernatural trickery."
      },
      {
        "id": 102,
        "emoji": "\u{1F47B}",
        "name": "Ghost",
        "category": "Smileys",
        "meaning": "A cartoonish white ghost with a wavy bottom and open mouth, representing the supernatural, haunting, or playful spookiness."
      },
      {
        "id": 103,
        "emoji": "\u{1F47D}",
        "name": "Alien",
        "category": "Smileys",
        "meaning": "A green extraterrestrial with large black eyes, representing outer space beings, feeling out of place, or something unfamiliar and strange."
      },
      {
        "id": 104,
        "emoji": "\u{1F47E}",
        "name": "Alien Monster",
        "category": "Smileys",
        "meaning": "A pixelated alien character from vintage arcade games, representing retro gaming culture, digital invaders, or nostalgic technology."
      },
      {
        "id": 105,
        "emoji": "\u{1F916}",
        "name": "Robot",
        "category": "Smileys",
        "meaning": "A metallic robot face with antenna, representing artificial intelligence, automation, or feeling mechanical and programmed in responses."
      },
      {
        "id": 106,
        "emoji": "\u{1F63A}",
        "name": "Grinning Cat",
        "category": "Animals",
        "meaning": "A cat face with a wide open-mouthed smile, representing feline happiness, mischievous satisfaction, or playful animal energy."
      },
      {
        "id": 107,
        "emoji": "\u{1F638}",
        "name": "Grinning Cat with Smiling Eyes",
        "category": "Animals",
        "meaning": "A cat face with squinted happy eyes and big smile, showing intense feline delight or playful excitement about something."
      },
      {
        "id": 108,
        "emoji": "\u{1F639}",
        "name": "Cat with Tears of Joy",
        "category": "Animals",
        "meaning": "A cat face laughing so hard it's crying, representing hilarious feline humor or finding something extremely funny with animal spirit."
      },
      {
        "id": 109,
        "emoji": "\u{1F63B}",
        "name": "Smiling Cat with Heart-Eyes",
        "category": "Animals",
        "meaning": "A cat face with hearts for eyes, showing feline adoration, affection, or love for something irresistible like treats or toys."
      },
      {
        "id": 110,
        "emoji": "\u{1F63C}",
        "name": "Cat with Wry Smile",
        "category": "Animals",
        "meaning": "A cat with a mischievous smirk, representing sly feline plotting, smugness, or satisfaction at getting away with something sneaky."
      },
      {
        "id": 111,
        "emoji": "\u{1F63D}",
        "name": "Kissing Cat",
        "category": "Animals",
        "meaning": "A cat face with puckered lips and closed eyes, showing feline affection, appreciation, or sending kisses to someone they care about."
      },
      {
        "id": 112,
        "emoji": "\u{1F640}",
        "name": "Weary Cat",
        "category": "Animals",
        "meaning": "A cat face with scrunched worried expression, representing feline distress, overwhelming situations, or being at one's limit."
      },
      {
        "id": 113,
        "emoji": "\u{1F63F}",
        "name": "Crying Cat",
        "category": "Animals",
        "meaning": "A sad cat face with a tear, showing feline sadness, disappointment, or emotional sensitivity to rejection or hurt feelings."
      },
      {
        "id": 114,
        "emoji": "\u{1F63E}",
        "name": "Pouting Cat",
        "category": "Animals",
        "meaning": "An angry cat face with downturned mouth, representing feline fury, aggressive indignation, or territorial defensiveness."
      },
      {
        "id": 115,
        "emoji": "\u{1F648}",
        "name": "See-No-Evil Monkey",
        "category": "Animals",
        "meaning": "A monkey covering its eyes, representing the principle of seeing no evil, denial, or refusing to witness something uncomfortable or inappropriate."
      },
      {
        "id": 116,
        "emoji": "\u{1F649}",
        "name": "Hear-No-Evil Monkey",
        "category": "Animals",
        "meaning": "A monkey covering its ears, representing the principle of hearing no evil, blocking out negativity, or refusing to listen to gossip or bad news."
      },
      {
        "id": 117,
        "emoji": "\u{1F64A}",
        "name": "Speak-No-Evil Monkey",
        "category": "Animals",
        "meaning": "A monkey covering its mouth, representing the principle of speaking no evil, keeping secrets, or restraining oneself from saying something inappropriate."
      },
      {
        "id": 118,
        "emoji": "\u{1F435}",
        "name": "Monkey Face",
        "category": "Animals",
        "meaning": "A friendly monkey face, representing playfulness, curiosity, or mischievous primate behavior in a lighthearted context."
      },
      {
        "id": 119,
        "emoji": "\u{1F412}",
        "name": "Monkey",
        "category": "Animals",
        "meaning": "A full-bodied monkey, representing agility, intelligence, or the symbolic connection between humans and their evolutionary primate relatives."
      },
      {
        "id": 120,
        "emoji": "\u{1F98D}",
        "name": "Gorilla",
        "category": "Animals",
        "meaning": "A large gorilla face, representing great strength, dominance, or powerful primate presence in wildlife conservation contexts."
      },
      {
        "id": 121,
        "emoji": "\u{1F9A7}",
        "name": "Orangutan",
        "category": "Animals",
        "meaning": "An orangutan face with distinctive orange fur, symbolizing endangered rainforest species, great intelligence, or contemplative gentleness."
      },
      {
        "id": 122,
        "emoji": "\u{1F436}",
        "name": "Dog Face",
        "category": "Animals",
        "meaning": "A friendly dog face with floppy ears, representing loyal companionship, playful energy, or man's best friend in a general sense."
      },
      {
        "id": 123,
        "emoji": "\u{1F415}",
        "name": "Dog",
        "category": "Animals",
        "meaning": "A full-bodied dog in profile, representing canine pets, faithful companionship, or the diverse world of domestic dog breeds."
      },
      {
        "id": 124,
        "emoji": "\u{1F9AE}",
        "name": "Guide Dog",
        "category": "Animals",
        "meaning": "A service dog with harness, representing assistance animals, accessibility support, or trained helpers for people with visual impairments."
      },
      {
        "id": 125,
        "emoji": "\u{1F429}",
        "name": "Poodle",
        "category": "Animals",
        "meaning": "A poodle dog with distinctive curly fur, representing fancy dog breeds, sophistication, or groomed elegance in the canine world."
      },
      {
        "id": 126,
        "emoji": "\u{1F43A}",
        "name": "Wolf",
        "category": "Animals",
        "meaning": "A wolf face with pointed ears, representing wilderness, pack mentality, or the wild ancestors of domestic dogs in nature."
      },
      {
        "id": 127,
        "emoji": "\u{1F98A}",
        "name": "Fox",
        "category": "Animals",
        "meaning": "A fox face with distinctive orange coloring, representing cleverness, cunning, or the sly intelligence associated with foxes in folklore."
      },
      {
        "id": 128,
        "emoji": "\u{1F99D}",
        "name": "Raccoon",
        "category": "Animals",
        "meaning": "A raccoon face with masked markings, representing nocturnal cleverness, adaptability to urban environments, or playful mischief."
      },
      {
        "id": 129,
        "emoji": "\u{1F431}",
        "name": "Cat Face",
        "category": "Animals",
        "meaning": "A friendly cat face with whiskers, representing feline companionship, independence, or the beloved house pets known for their mysterious nature."
      },
      {
        "id": 130,
        "emoji": "\u{1F408}",
        "name": "Cat",
        "category": "Animals",
        "meaning": "A full-bodied cat in profile, representing domestic felines, graceful movement, or the quiet companionship of household cats."
      },
      {
        "id": 131,
        "emoji": "\u{1F981}",
        "name": "Lion",
        "category": "Animals",
        "meaning": "A lion face with mane, representing courage, leadership, or the majestic king of the jungle in African wildlife."
      },
      {
        "id": 132,
        "emoji": "\u{1F42F}",
        "name": "Tiger Face",
        "category": "Animals",
        "meaning": "A tiger face with distinctive stripes, representing fierceness, power, or the endangered big cats of Asian jungles."
      },
      {
        "id": 133,
        "emoji": "\u{1F405}",
        "name": "Tiger",
        "category": "Animals",
        "meaning": "A full-bodied tiger in profile, representing strength, stealth, or the majestic striped predators of Asian forests facing conservation challenges."
      },
      {
        "id": 134,
        "emoji": "\u{1F406}",
        "name": "Leopard",
        "category": "Animals",
        "meaning": "A leopard with spotted coat, representing stealth, agility, or the elusive big cats known for their climbing abilities and adaptability."
      },
      {
        "id": 135,
        "emoji": "\u{1F434}",
        "name": "Horse Face",
        "category": "Animals",
        "meaning": "A horse face with mane, representing equine nobility, racing spirit, or the close bond between horses and humans throughout history."
      },
      {
        "id": 136,
        "emoji": "\u{1F40E}",
        "name": "Horse",
        "category": "Animals",
        "meaning": "A full-bodied horse in profile, representing strength, freedom, or the majestic animals that have partnered with humans for transportation and work."
      },
      {
        "id": 137,
        "emoji": "\u{1F984}",
        "name": "Unicorn",
        "category": "Animals",
        "meaning": "A mythical white horse with rainbow horn, representing magic, fantasy, or something rare and special that seems too good to be true."
      },
      {
        "id": 138,
        "emoji": "\u{1F993}",
        "name": "Zebra",
        "category": "Animals",
        "meaning": "A zebra with distinctive black and white stripes, representing uniqueness, African wildlife, or the striking pattern that makes each zebra individual."
      },
      {
        "id": 139,
        "emoji": "\u{1F98C}",
        "name": "Deer",
        "category": "Animals",
        "meaning": "A deer with antlers, representing grace, gentleness, or the forest wildlife that symbolizes peace and serenity in natural settings."
      },
      {
        "id": 140,
        "emoji": "\u{1F9AC}",
        "name": "Bison",
        "category": "Animals",
        "meaning": "A bison with shaggy coat and horns, representing North American wildlife, strength, or the powerful prairie animals central to indigenous cultures."
      },
      {
        "id": 141,
        "emoji": "\u{1F42E}",
        "name": "Cow Face",
        "category": "Animals",
        "meaning": "A cow face with horns, representing farm animals, dairy production, or the gentle bovine creatures important to agriculture worldwide."
      },
      {
        "id": 142,
        "emoji": "\u{1F402}",
        "name": "Ox",
        "category": "Animals",
        "meaning": "A strong ox with horns, representing hard work, determination, or the powerful farm animals used historically for plowing and heavy labor."
      },
      {
        "id": 143,
        "emoji": "\u{1F403}",
        "name": "Water Buffalo",
        "category": "Animals",
        "meaning": "A water buffalo with large horns, representing Asian agriculture, mud-loving bovines, or the important work animals in rice farming communities."
      },
      {
        "id": 144,
        "emoji": "\u{1F404}",
        "name": "Cow",
        "category": "Animals",
        "meaning": "A full-bodied cow in profile, representing dairy farming, pastoral life, or the important livestock that provides milk and beef worldwide."
      },
      {
        "id": 145,
        "emoji": "\u{1F437}",
        "name": "Pig Face",
        "category": "Animals",
        "meaning": "A pig face with snout, representing farm animals, playful intelligence, or the sometimes underestimated cleverness of porcine creatures."
      },
      {
        "id": 146,
        "emoji": "\u{1F416}",
        "name": "Pig",
        "category": "Animals",
        "meaning": "A full-bodied pig in profile, representing farm livestock, bacon source, or the domesticated animals important to many food cultures."
      },
      {
        "id": 147,
        "emoji": "\u{1F417}",
        "name": "Boar",
        "category": "Animals",
        "meaning": "A wild boar with tusks, representing wilderness, untamed nature, or the wild ancestors of domestic pigs that roam forests worldwide."
      },
      {
        "id": 148,
        "emoji": "\u{1F43D}",
        "name": "Pig Nose",
        "category": "Animals",
        "meaning": "A close-up of a pig's snout, representing smell, curiosity, or the distinctive feature used by pigs to root through soil for food."
      },
      {
        "id": 149,
        "emoji": "\u{1F40F}",
        "name": "Ram",
        "category": "Animals",
        "meaning": "A ram with curved horns, representing determination, stubbornness, or the male sheep known for their impressive headgear and fighting spirit."
      },
      {
        "id": 150,
        "emoji": "\u{1F411}",
        "name": "Sheep",
        "category": "Animals",
        "meaning": "A white sheep with wool coat, representing gentleness, herd mentality, or the important livestock that provides wool and meat globally."
      },
      {
        "id": 151,
        "emoji": "\u{1F410}",
        "name": "Goat",
        "category": "Animals",
        "meaning": "A goat with horns and beard, representing climbing ability, stubbornness, or the versatile farm animals known for their milk and cheese production."
      },
      {
        "id": 152,
        "emoji": "\u{1F42A}",
        "name": "Camel",
        "category": "Animals",
        "meaning": "A dromedary camel with one hump, representing desert travel, endurance, or the ships of the desert known for water conservation abilities."
      },
      {
        "id": 153,
        "emoji": "\u{1F42B}",
        "name": "Two-Hump Camel",
        "category": "Animals",
        "meaning": "A Bactrian camel with two humps, representing Central Asian steppes, cold desert adaptation, or the distinctive silhouette of these hardy animals."
      },
      {
        "id": 154,
        "emoji": "\u{1F999}",
        "name": "Llama",
        "category": "Animals",
        "meaning": "A llama with long neck, representing Andean culture, wool production, or the pack animals important to South American mountain communities."
      },
      {
        "id": 155,
        "emoji": "\u{1F992}",
        "name": "Giraffe",
        "category": "Animals",
        "meaning": "A giraffe with long neck and spotted pattern, representing height, uniqueness, or the tallest land animals with their distinctive appearance."
      },
      {
        "id": 156,
        "emoji": "\u{1F418}",
        "name": "Elephant",
        "category": "Animals",
        "meaning": "An elephant with trunk and tusks, representing memory, wisdom, or the largest land mammals known for their intelligence and family bonds."
      },
      {
        "id": 157,
        "emoji": "\u{1F9A3}",
        "name": "Mammoth",
        "category": "Animals",
        "meaning": "A woolly mammoth with long curved tusks, representing prehistoric wildlife, extinction, or the ice age relatives of modern elephants."
      },
      {
        "id": 158,
        "emoji": "\u{1F98F}",
        "name": "Rhinoceros",
        "category": "Animals",
        "meaning": "A rhinoceros with horn, representing strength, endangered species, or the powerful thick-skinned animals facing poaching threats."
      },
      {
        "id": 159,
        "emoji": "\u{1F99B}",
        "name": "Hippopotamus",
        "category": "Animals",
        "meaning": "A hippopotamus with wide mouth, representing African river life, surprising power, or the deceptively dangerous animals despite their round appearance."
      },
      {
        "id": 160,
        "emoji": "\u{1F42D}",
        "name": "Mouse Face",
        "category": "Animals",
        "meaning": "A mouse face with rounded ears, representing small rodents, meekness, or the tiny creatures with oversized personality in stories and cartoons."
      },
      {
        "id": 161,
        "emoji": "\u{1F401}",
        "name": "Mouse",
        "category": "Animals",
        "meaning": "A full-bodied mouse in profile, representing small mammals, laboratory science, or the common rodents that have adapted to living alongside humans."
      },
      {
        "id": 162,
        "emoji": "\u{1F400}",
        "name": "Rat",
        "category": "Animals",
        "meaning": "A rat with long tail, representing survival, adaptability, or the intelligent rodents that thrive in urban environments despite their reputation."
      },
      {
        "id": 163,
        "emoji": "\u{1F439}",
        "name": "Hamster",
        "category": "Animals",
        "meaning": "A hamster face with chubby cheeks, representing pet rodents, food hoarding, or the popular small pets known for stuffing their cheek pouches."
      },
      {
        "id": 164,
        "emoji": "\u{1F430}",
        "name": "Rabbit Face",
        "category": "Animals",
        "meaning": "A rabbit face with long ears, representing gentleness, fertility, or the beloved pets and wild animals known for their hopping movement."
      },
      {
        "id": 165,
        "emoji": "\u{1F407}",
        "name": "Rabbit",
        "category": "Animals",
        "meaning": "A full-bodied rabbit in profile, representing springtime, quickness, or the fluffy mammals that symbolize abundance and reproduction."
      },
      {
        "id": 166,
        "emoji": "\u{1F43F}",
        "name": "Chipmunk",
        "category": "Animals",
        "meaning": "A chipmunk with striped back, representing forest creatures, food storing, or the small rodents known for their cheek pouches and tree climbing."
      },
      {
        "id": 167,
        "emoji": "\u{1F9AB}",
        "name": "Beaver",
        "category": "Animals",
        "meaning": "A beaver with flat tail, representing industriousness, dam building, or the aquatic rodents known for their engineering skills and water adaptations."
      },
      {
        "id": 168,
        "emoji": "\u{1F994}",
        "name": "Hedgehog",
        "category": "Animals",
        "meaning": "A hedgehog with spines, representing self-protection, cuteness, or the small mammals that roll into a ball when threatened by predators."
      },
      {
        "id": 169,
        "emoji": "\u{1F987}",
        "name": "Bat",
        "category": "Animals",
        "meaning": "A bat with outstretched wings, representing night creatures, echolocation, or the only flying mammals crucial for pollination and insect control."
      },
      {
        "id": 170,
        "emoji": "\u{1F43B}",
        "name": "Bear",
        "category": "Animals",
        "meaning": "A bear face, representing wilderness, strength, or the powerful omnivores that range from black bears to grizzlies across forest habitats."
      },
      {
        "id": 171,
        "emoji": "\u{1F428}",
        "name": "Koala",
        "category": "Animals",
        "meaning": "A koala face with round ears, representing Australian wildlife, eucalyptus eaters, or the marsupials that sleep most of the day in gum trees."
      },
      {
        "id": 172,
        "emoji": "\u{1F43C}",
        "name": "Panda",
        "category": "Animals",
        "meaning": "A panda face with black and white markings, representing conservation success, bamboo diets, or the beloved bears that symbolize wildlife protection."
      },
      {
        "id": 173,
        "emoji": "\u{1F9A5}",
        "name": "Sloth",
        "category": "Animals",
        "meaning": "A sloth hanging from a branch, representing slowness, relaxation, or the leisurely tree-dwelling mammals known for their unhurried lifestyle."
      },
      {
        "id": 174,
        "emoji": "\u{1F9A6}",
        "name": "Otter",
        "category": "Animals",
        "meaning": "An otter with sleek body, representing playfulness, aquatic life, or the charming mammals known for floating on their backs and using tools."
      },
      {
        "id": 175,
        "emoji": "\u{1F9A8}",
        "name": "Skunk",
        "category": "Animals",
        "meaning": "A skunk with striped back, representing defense mechanisms, distinctive odor, or the black and white mammals that spray when threatened."
      },
      {
        "id": 176,
        "emoji": "\u{1F998}",
        "name": "Kangaroo",
        "category": "Animals",
        "meaning": "A kangaroo with joey in pouch, representing Australia, hopping movement, or the marsupials known for carrying their young in pouches."
      },
      {
        "id": 177,
        "emoji": "\u{1F9A1}",
        "name": "Badger",
        "category": "Animals",
        "meaning": "A badger with striped face, representing determination, burrowing, or the strong-willed mammals known for their powerful digging abilities."
      },
      {
        "id": 178,
        "emoji": "\u{1F43E}",
        "name": "Paw Prints",
        "category": "Animals",
        "meaning": "Animal footprints, representing tracking, pet presence, or the marks left behind by our furry companions as they move through the world."
      },
      {
        "id": 179,
        "emoji": "\u{1F983}",
        "name": "Turkey",
        "category": "Animals",
        "meaning": "A turkey with fanned tail feathers, representing Thanksgiving, gobbling calls, or the large birds central to holiday meals in North America."
      },
      {
        "id": 180,
        "emoji": "\u{1F414}",
        "name": "Chicken",
        "category": "Animals",
        "meaning": "A chicken in profile, representing poultry farming, egg production, or the domesticated birds that provide food worldwide."
      },
      {
        "id": 181,
        "emoji": "\u{1F413}",
        "name": "Rooster",
        "category": "Animals",
        "meaning": "A rooster with colorful plumage, representing morning wake-up calls, farm life, or the male chicken known for crowing at dawn."
      },
      {
        "id": 182,
        "emoji": "\u{1F423}",
        "name": "Hatching Chick",
        "category": "Animals",
        "meaning": "A baby chick breaking out of its shell, representing new beginnings, birth, or the emergence of something fresh and untested."
      },
      {
        "id": 183,
        "emoji": "\u{1F424}",
        "name": "Baby Chick",
        "category": "Animals",
        "meaning": "A fluffy yellow chick, representing springtime, cuteness, or the early stages of growth and development with innocent vulnerability."
      },
      {
        "id": 184,
        "emoji": "\u{1F425}",
        "name": "Front-Facing Baby Chick",
        "category": "Animals",
        "meaning": "A baby chick facing forward, representing direct engagement, curious youth, or the forward-looking aspect of new life and beginnings."
      },
      {
        "id": 185,
        "emoji": "\u{1F426}",
        "name": "Bird",
        "category": "Animals",
        "meaning": "A small bird in profile, representing freedom, song, or the diverse world of feathered creatures that inhabit every corner of the earth."
      },
      {
        "id": 186,
        "emoji": "\u{1F427}",
        "name": "Penguin",
        "category": "Animals",
        "meaning": "A penguin in tuxedo-like plumage, representing Antarctica, flightless birds, or the charming waddlers that thrive in extreme cold."
      },
      {
        "id": 187,
        "emoji": "\u{1F54A}",
        "name": "Dove",
        "category": "Animals",
        "meaning": "A white dove with olive branch, representing peace, hope, or the universal symbol of harmony and conflict resolution."
      },
      {
        "id": 188,
        "emoji": "\u{1F985}",
        "name": "Eagle",
        "category": "Animals",
        "meaning": "An eagle with sharp beak, representing freedom, power, or the majestic birds of prey that symbolize strength and national pride."
      },
      {
        "id": 189,
        "emoji": "\u{1F986}",
        "name": "Duck",
        "category": "Animals",
        "meaning": "A duck in profile, representing water birds, quacking, or the waterfowl known for their distinctive calls and swimming abilities."
      },
      {
        "id": 190,
        "emoji": "\u{1F9A2}",
        "name": "Swan",
        "category": "Animals",
        "meaning": "A white swan with long neck, representing grace, elegance, or the beautiful water birds known for their lifelong mating pairs."
      },
      {
        "id": 191,
        "emoji": "\u{1F989}",
        "name": "Owl",
        "category": "Animals",
        "meaning": "An owl with wide eyes, representing wisdom, night vision, or the nocturnal birds associated with intelligence and mystery."
      },
      {
        "id": 192,
        "emoji": "\u{1F9A4}",
        "name": "Dodo",
        "category": "Animals",
        "meaning": "A dodo bird, representing extinction, lost species, or the flightless birds that disappeared due to human activity as a cautionary tale."
      },
      {
        "id": 193,
        "emoji": "\u{1F9A9}",
        "name": "Flamingo",
        "category": "Animals",
        "meaning": "A pink flamingo with long neck, representing tropical settings, distinctive color, or the wading birds known for standing on one leg."
      },
      {
        "id": 194,
        "emoji": "\u{1F99A}",
        "name": "Peacock",
        "category": "Animals",
        "meaning": "A peacock with colorful fanned tail, representing pride, beauty, or the spectacular display of iridescent feathers during courtship."
      },
      {
        "id": 195,
        "emoji": "\u{1F99C}",
        "name": "Parrot",
        "category": "Animals",
        "meaning": "A colorful parrot, representing tropical birds, mimicry, or the intelligent avians known for their ability to repeat human speech."
      },
      {
        "id": 196,
        "emoji": "\u{1F438}",
        "name": "Frog",
        "category": "Animals",
        "meaning": "A green frog face, representing amphibians, croaking, or the pond-dwelling creatures that transform from tadpoles in metamorphosis."
      },
      {
        "id": 197,
        "emoji": "\u{1F40A}",
        "name": "Crocodile",
        "category": "Animals",
        "meaning": "A crocodile with scales and teeth, representing ambush predators, ancient reptiles, or the powerful water hunters with armored skin."
      },
      {
        "id": 198,
        "emoji": "\u{1F422}",
        "name": "Turtle",
        "category": "Animals",
        "meaning": "A turtle with shell, representing longevity, patience, or the steady reptiles known for carrying their homes on their backs."
      },
      {
        "id": 199,
        "emoji": "\u{1F98E}",
        "name": "Lizard",
        "category": "Animals",
        "meaning": "A lizard with long tail, representing reptiles, sun-basking, or the cold-blooded creatures known for their ability to regrow lost tails."
      },
      {
        "id": 200,
        "emoji": "\u{1F40D}",
        "name": "Snake",
        "category": "Animals",
        "meaning": "A coiled snake, representing cunning, transformation, or the legless reptiles that have inspired both fear and fascination throughout human history."
      },
      {
        "id": 201,
        "emoji": "🚀",
        "name": "Rocket",
        "category": "Travel & Places",
        "meaning": "A spacecraft launching into the sky, representing exploration, ambition, or a successful launch of a project."
      },
      {
        "id": 202,
        "emoji": "🛸",
        "name": "Flying Saucer",
        "category": "Travel & Places",
        "meaning": "An alien spacecraft hovering in the air, symbolizing extraterrestrial life, science fiction, or something otherworldly and mysterious."
      },
      {
        "id": 203,
        "emoji": "🛺",
        "name": "Auto Rickshaw",
        "category": "Travel & Places",
        "meaning": "A three-wheeled motorized vehicle used as taxi in many Asian countries, representing affordable transportation or travel in urban areas."
      },
      {
        "id": 204,
        "emoji": "🚁",
        "name": "Helicopter",
        "category": "Travel & Places",
        "meaning": "An aircraft with rotating blades that can hover and fly in any direction, representing aerial transportation, rescue operations, or luxury travel."
      },
      {
        "id": 205,
        "emoji": "🚢",
        "name": "Ship",
        "category": "Travel & Places",
        "meaning": "A large vessel designed for navigating on water, symbolizing oceanic travel, cruises, or maritime transportation."
      },
      {
        "id": 206,
        "emoji": "🚗",
        "name": "Automobile",
        "category": "Travel & Places",
        "meaning": "A four-wheeled personal vehicle, representing everyday transportation, road trips, or independence."
      },
      {
        "id": 207,
        "emoji": "🚕",
        "name": "Taxi",
        "category": "Travel & Places",
        "meaning": "A yellow car used for hire, symbolizing urban transportation, convenience, or getting somewhere quickly."
      },
      {
        "id": 208,
        "emoji": "🚌",
        "name": "Bus",
        "category": "Travel & Places",
        "meaning": "A large vehicle designed to carry multiple passengers, representing public transportation, commuting, or group travel."
      },
      {
        "id": 209,
        "emoji": "🚲",
        "name": "Bicycle",
        "category": "Travel & Places",
        "meaning": "A two-wheeled human-powered vehicle, symbolizing eco-friendly transportation, exercise, or outdoor recreation."
      },
      {
        "id": 210,
        "emoji": "🛴",
        "name": "Kick Scooter",
        "category": "Travel & Places",
        "meaning": "A standing vehicle with two wheels and a handlebar, representing urban mobility, micro-transportation, or recreational riding."
      },
      {
        "id": 211,
        "emoji": "🏠",
        "name": "House",
        "category": "Travel & Places",
        "meaning": "A single-family dwelling, symbolizing home, shelter, or domestic life."
      },
      {
        "id": 212,
        "emoji": "🏘️",
        "name": "Houses",
        "category": "Travel & Places",
        "meaning": "Multiple residential buildings together, representing a neighborhood, community, or suburban living."
      },
      {
        "id": 213,
        "emoji": "🏢",
        "name": "Office Building",
        "category": "Travel & Places",
        "meaning": "A tall commercial structure, symbolizing business, work environments, or corporate settings."
      },
      {
        "id": 214,
        "emoji": "🏫",
        "name": "School",
        "category": "Travel & Places",
        "meaning": "An educational institution building, representing learning, academic environments, or childhood education."
      },
      {
        "id": 215,
        "emoji": "🏰",
        "name": "Castle",
        "category": "Travel & Places",
        "meaning": "A large fortified structure with towers and battlements, symbolizing royalty, history, or fairy tales."
      },
      {
        "id": 216,
        "emoji": "🏯",
        "name": "Japanese Castle",
        "category": "Travel & Places",
        "meaning": "A traditional Japanese fortress with distinctive architecture, representing Japanese culture, history, or imperial heritage."
      },
      {
        "id": 217,
        "emoji": "🏟️",
        "name": "Stadium",
        "category": "Travel & Places",
        "meaning": "A large open-air venue for sports events, representing athletics, competitions, or large gatherings."
      },
      {
        "id": 218,
        "emoji": "🌉",
        "name": "Bridge at Night",
        "category": "Travel & Places",
        "meaning": "An illuminated bridge spanning water after dark, symbolizing connections, urban scenery, or romantic cityscapes."
      },
      {
        "id": 219,
        "emoji": "⛰️",
        "name": "Mountain",
        "category": "Travel & Places",
        "meaning": "A large natural elevation of the earth's surface, representing nature, challenges to overcome, or outdoor adventures."
      },
      {
        "id": 220,
        "emoji": "🏝️",
        "name": "Desert Island",
        "category": "Travel & Places",
        "meaning": "A small tropical island with palm trees, symbolizing isolation, vacation destinations, or escape from civilization."
      },
      {
        "id": 221,
        "emoji": "🏕️",
        "name": "Camping",
        "category": "Travel & Places",
        "meaning": "A tent pitched in a natural setting, representing outdoor living, adventure, or temporary accommodation in nature."
      },
      {
        "id": 222,
        "emoji": "🌋",
        "name": "Volcano",
        "category": "Travel & Places",
        "meaning": "A mountain with a crater erupting lava, symbolizing explosive power, geological forces, or unpredictable danger."
      },
      {
        "id": 223,
        "emoji": "🏖️",
        "name": "Beach with Umbrella",
        "category": "Travel & Places",
        "meaning": "A sandy shore with a parasol, representing vacation, relaxation by the sea, or summer leisure."
      },
      {
        "id": 224,
        "emoji": "🌃",
        "name": "Night with Stars",
        "category": "Travel & Places",
        "meaning": "A dark sky filled with stars, symbolizing evening, cosmic wonder, or peaceful nights."
      },
      {
        "id": 225,
        "emoji": "🌆",
        "name": "Cityscape at Dusk",
        "category": "Travel & Places",
        "meaning": "An urban skyline during sunset, representing transition times, urban living, or the beauty of city lights emerging."
      },
      {
        "id": 226,
        "emoji": "🏙️",
        "name": "Cityscape",
        "category": "Travel & Places",
        "meaning": "A dense urban area with tall buildings, representing metropolitan life, urban development, or city centers."
      },
      {
        "id": 227,
        "emoji": "🌄",
        "name": "Sunrise Over Mountains",
        "category": "Travel & Places",
        "meaning": "The sun rising behind mountains, symbolizing new beginnings, fresh starts, or early morning beauty."
      },
      {
        "id": 228,
        "emoji": "🌅",
        "name": "Sunrise",
        "category": "Travel & Places",
        "meaning": "The sun appearing on the horizon, representing dawn, awakening, or the start of a new day."
      },
      {
        "id": 229,
        "emoji": "🌇",
        "name": "Sunset",
        "category": "Travel & Places",
        "meaning": "The sun descending below the horizon, symbolizing completion, endings, or the beauty of closing daylight."
      },
      {
        "id": 230,
        "emoji": "🌁",
        "name": "Foggy",
        "category": "Travel & Places",
        "meaning": "A landscape obscured by mist, representing uncertainty, mystery, or atmospheric conditions limiting visibility."
      },
      {
        "id": 231,
        "emoji": "🌌",
        "name": "Milky Way",
        "category": "Travel & Places",
        "meaning": "A vision of our galaxy with countless stars, symbolizing the cosmos, infinite possibilities, or astronomical wonder."
      },
      {
        "id": 232,
        "emoji": "🎡",
        "name": "Ferris Wheel",
        "category": "Travel & Places",
        "meaning": "A large rotating wheel with passenger cars, representing amusement parks, carnival fun, or scenic elevated views."
      },
      {
        "id": 233,
        "emoji": "🎢",
        "name": "Roller Coaster",
        "category": "Travel & Places",
        "meaning": "A thrill ride with steep drops and turns, symbolizing excitement, emotional ups and downs, or adrenaline rushes."
      },
      {
        "id": 234,
        "emoji": "🎪",
        "name": "Circus Tent",
        "category": "Travel & Places",
        "meaning": "A large striped tent for performances, representing entertainment, spectacle, or traveling shows."
      },
      {
        "id": 235,
        "emoji": "🗽",
        "name": "Statue of Liberty",
        "category": "Travel & Places",
        "meaning": "The iconic American monument in New York Harbor, symbolizing freedom, democracy, or the United States."
      },
      {
        "id": 236,
        "emoji": "🗼",
        "name": "Tokyo Tower",
        "category": "Travel & Places",
        "meaning": "A red and white lattice tower in Japan, representing Tokyo, Japanese landmarks, or modern architecture."
      },
      {
        "id": 237,
        "emoji": "🚦",
        "name": "Vertical Traffic Light",
        "category": "Travel & Places",
        "meaning": "A signal with red, yellow, and green lights stacked vertically, symbolizing traffic control, stopping and going, or ordered progression."
      },
      {
        "id": 238,
        "emoji": "⛵",
        "name": "Sailboat",
        "category": "Travel & Places",
        "meaning": "A boat propelled by wind catching in sails, representing nautical travel, leisure sailing, or harnessing natural forces."
      },
      {
        "id": 239,
        "emoji": "🏊",
        "name": "Person Swimming",
        "category": "Activities",
        "meaning": "A human figure moving through water, symbolizing aquatic sports, exercise, or recreational water activities."
      },
      {
        "id": 240,
        "emoji": "🏄",
        "name": "Person Surfing",
        "category": "Activities",
        "meaning": "A human figure riding a wave on a surfboard, representing beach culture, water sports, or riding life's waves."
      },
      {
        "id": 241,
        "emoji": "🏂",
        "name": "Snowboarder",
        "category": "Activities",
        "meaning": "A person riding a snowboard down a slope, symbolizing winter sports, mountain recreation, or snow adventures."
      },
      {
        "id": 242,
        "emoji": "🏌️",
        "name": "Person Golfing",
        "category": "Activities",
        "meaning": "A human figure swinging a golf club, representing the sport of golf, leisure activities, or precision sports."
      },
      {
        "id": 243,
        "emoji": "🚴",
        "name": "Person Biking",
        "category": "Activities",
        "meaning": "A human figure riding a bicycle, symbolizing cycling sports, eco-friendly transportation, or outdoor exercise."
      },
      {
        "id": 244,
        "emoji": "🧗",
        "name": "Person Climbing",
        "category": "Activities",
        "meaning": "A human figure scaling a rock or wall, representing mountaineering, overcoming challenges, or upward progress."
      },
      {
        "id": 245,
        "emoji": "🏆",
        "name": "Trophy",
        "category": "Activities",
        "meaning": "A golden cup awarded for victory, symbolizing achievement, winning, or recognition of excellence."
      },
      {
        "id": 246,
        "emoji": "🏅",
        "name": "Sports Medal",
        "category": "Activities",
        "meaning": "A circular medal on a ribbon, representing athletic achievement, competition rewards, or honorable recognition."
      },
      {
        "id": 247,
        "emoji": "🎯",
        "name": "Direct Hit",
        "category": "Activities",
        "meaning": "A bullseye with an arrow in the center, symbolizing accuracy, achieving goals precisely, or hitting the mark."
      },
      {
        "id": 248,
        "emoji": "🎮",
        "name": "Video Game Controller",
        "category": "Activities",
        "meaning": "A handheld device for playing games, representing gaming culture, electronic entertainment, or interactive media."
      },
      {
        "id": 249,
        "emoji": "🎲",
        "name": "Game Die",
        "category": "Activities",
        "meaning": "A six-sided cube with dots representing numbers, symbolizing games of chance, randomness, or taking risks."
      },
      {
        "id": 250,
        "emoji": "🎭",
        "name": "Performing Arts",
        "category": "Activities",
        "meaning": "Comedy and tragedy theatrical masks, representing drama, theater, or the contrasting emotions of human experience."
      },
      {
        "id": 251,
        "emoji": "🎨",
        "name": "Artist Palette",
        "category": "Activities",
        "meaning": "A board with paint colors, symbolizing visual arts, creativity, or artistic expression."
      },
      {
        "id": 252,
        "emoji": "🎤",
        "name": "Microphone",
        "category": "Activities",
        "meaning": "A handheld audio input device, representing singing, public speaking, or vocal performance."
      },
      {
        "id": 253,
        "emoji": "🎧",
        "name": "Headphone",
        "category": "Activities",
        "meaning": "Audio listening equipment worn over the ears, symbolizing music appreciation, audio entertainment, or personal listening."
      },
      {
        "id": 254,
        "emoji": "🎷",
        "name": "Saxophone",
        "category": "Activities",
        "meaning": "A brass wind instrument with a curved shape, representing jazz music, musical performance, or smooth sounds."
      },
      {
        "id": 255,
        "emoji": "🎸",
        "name": "Guitar",
        "category": "Activities",
        "meaning": "A stringed musical instrument with a neck and body, symbolizing rock music, musical talent, or string instruments."
      },
      {
        "id": 256,
        "emoji": "🎹",
        "name": "Piano",
        "category": "Activities",
        "meaning": "A keyboard musical instrument with black and white keys, representing classical music, composition, or keyboard instruments."
      },
      {
        "id": 257,
        "emoji": "🎺",
        "name": "Trumpet",
        "category": "Activities",
        "meaning": "A brass wind instrument with three valves, symbolizing fanfare, brass bands, or bold musical statements."
      },
      {
        "id": 258,
        "emoji": "🎻",
        "name": "Violin",
        "category": "Activities",
        "meaning": "A wooden stringed instrument played with a bow, representing classical music, orchestras, or string quartets."
      },
      {
        "id": 259,
        "emoji": "🎬",
        "name": "Clapper Board",
        "category": "Activities",
        "meaning": "A filmmaking tool used to mark scenes, symbolizing movie production, film industry, or the beginning of action."
      },
      {
        "id": 260,
        "emoji": "🎵",
        "name": "Musical Note",
        "category": "Activities",
        "meaning": "A symbol representing sound in music, symbolizing melody, songs, or musical expression."
      },
      {
        "id": 261,
        "emoji": "🎶",
        "name": "Musical Notes",
        "category": "Activities",
        "meaning": "Multiple musical symbols, representing harmony, music in the air, or flowing melodies."
      },
      {
        "id": 262,
        "emoji": "🧩",
        "name": "Puzzle Piece",
        "category": "Activities",
        "meaning": "A single piece of a jigsaw puzzle, symbolizing problem-solving, fitting together, or missing elements."
      },
      {
        "id": 263,
        "emoji": "🧸",
        "name": "Teddy Bear",
        "category": "Activities",
        "meaning": "A stuffed toy bear, representing childhood, comfort objects, or innocent affection."
      },
      {
        "id": 264,
        "emoji": "🪁",
        "name": "Kite",
        "category": "Activities",
        "meaning": "A light frame covered with paper or cloth for flying in the wind, symbolizing outdoor play, freedom, or soaring ambitions."
      },
      {
        "id": 265,
        "emoji": "🎈",
        "name": "Balloon",
        "category": "Activities",
        "meaning": "An inflated rubber bag often used as decoration, representing celebrations, parties, or light-hearted joy."
      },
      {
        "id": 266,
        "emoji": "🧶",
        "name": "Yarn",
        "category": "Activities",
        "meaning": "A ball of spun thread used for knitting or crochet, representing crafting, textile arts, or homemade creation."
      },
      {
        "id": 267,
        "emoji": "🧵",
        "name": "Thread",
        "category": "Activities",
        "meaning": "A thin strand of fiber used for sewing, symbolizing connection, craftwork, or detailed handiwork."
      },
      {
        "id": 268,
        "emoji": "🥇",
        "name": "Gold Medal",
        "category": "Activities",
        "meaning": "A first-place medal made of gold, representing championship, ultimate victory, or top achievement."
      },
      {
        "id": 269,
        "emoji": "🥈",
        "name": "Silver Medal",
        "category": "Activities",
        "meaning": "A second-place medal made of silver, symbolizing runner-up status, notable achievement, or honorable performance."
      },
      {
        "id": 270,
        "emoji": "🥉",
        "name": "Bronze Medal",
        "category": "Activities",
        "meaning": "A third-place medal made of bronze, representing commendable effort, placing on the podium, or recognized accomplishment."
      },
      {
        "id": 271,
        "emoji": "🍎",
        "name": "Red Apple",
        "category": "Food & Drink",
        "meaning": "A crisp, sweet fruit with red skin, symbolizing health, education, or temptation."
      },
      {
        "id": 272,
        "emoji": "🍐",
        "name": "Pear",
        "category": "Food & Drink",
        "meaning": "A sweet fruit with a distinctive tapered shape, representing sweetness, nutrition, or uniqueness."
      },
      {
        "id": 273,
        "emoji": "🍊",
        "name": "Tangerine",
        "category": "Food & Drink",
        "meaning": "A small citrus fruit with orange skin, symbolizing vitamin C, refreshment, or easy-to-eat snacks."
      },
      {
        "id": 274,
        "emoji": "🍋",
        "name": "Lemon",
        "category": "Food & Drink",
        "meaning": "A bright yellow citrus fruit with sour juice, representing tartness, cleansing properties, or making the best of difficult situations."
      },
      {
        "id": 275,
        "emoji": "🍌",
        "name": "Banana",
        "category": "Food & Drink",
        "meaning": "A curved yellow fruit with a peelable skin, symbolizing energy, tropical foods, or convenient snacking."
      },
      {
        "id": 276,
        "emoji": "🍉",
        "name": "Watermelon",
        "category": "Food & Drink",
        "meaning": "A large fruit with green rind and red flesh, representing summer refreshment, hydration, or seasonal enjoyment."
      },
      {
        "id": 277,
        "emoji": "🍇",
        "name": "Grapes",
        "category": "Food & Drink",
        "meaning": "A bunch of small, juicy berries, symbolizing abundance, wine production, or clusters of goodness."
      },
      {
        "id": 278,
        "emoji": "🍓",
        "name": "Strawberry",
        "category": "Food & Drink",
        "meaning": "A red fruit with seeds on its surface, representing sweetness, summer fruits, or romantic indulgence."
      },
      {
        "id": 279,
        "emoji": "🫐",
        "name": "Blueberries",
        "category": "Food & Drink",
        "meaning": "Small round blue-purple berries, symbolizing antioxidants, brain health, or natural snacking."
      },
      {
        "id": 280,
        "emoji": "🍍",
        "name": "Pineapple",
        "category": "Food & Drink",
        "meaning": "A tropical fruit with a spiky exterior and sweet interior, representing hospitality, tropical locations, or exotic flavors."
      },
      {
        "id": 281,
        "emoji": "🥭",
        "name": "Mango",
        "category": "Food & Drink",
        "meaning": "A juicy tropical fruit with yellow-orange flesh, symbolizing sweetness, tropical indulgence, or exotic cuisine."
      },
      {
        "id": 282,
        "emoji": "🍑",
        "name": "Peach",
        "category": "Food & Drink",
        "meaning": "A soft fruit with fuzzy skin and sweet flesh, representing summer harvests, sweetness, or gentle qualities."
      },
      {
        "id": 283,
        "emoji": "🍒",
        "name": "Cherries",
        "category": "Food & Drink",
        "meaning": "Two red cherries with a stem, symbolizing pair relationships, sweet treats, or premium quality."
      },
      {
        "id": 284,
        "emoji": "🥝",
        "name": "Kiwi Fruit",
        "category": "Food & Drink",
        "meaning": "A green fruit with tiny black seeds and fuzzy brown skin, representing exotic taste, nutritional density, or New Zealand."
      },
      {
        "id": 285,
        "emoji": "🥑",
        "name": "Avocado",
        "category": "Food & Drink",
        "meaning": "A pear-shaped fruit with green flesh and a large pit, symbolizing healthy fats, trendy foods, or millennial cuisine."
      },
      {
        "id": 286,
        "emoji": "🍅",
        "name": "Tomato",
        "category": "Food & Drink",
        "meaning": "A red fruit commonly used as a vegetable, representing versatility in cooking, Mediterranean cuisine, or garden harvests."
      },
      {
        "id": 287,
        "emoji": "🥕",
        "name": "Carrot",
        "category": "Food & Drink",
        "meaning": "An orange root vegetable, symbolizing improved vision, healthy eating, or rabbit food."
      },
      {
        "id": 288,
        "emoji": "🌽",
        "name": "Ear of Corn",
        "category": "Food & Drink",
        "meaning": "A yellow cereal grain on the cob, representing harvest season, agricultural abundance, or American farming."
      },
      {
        "id": 289,
        "emoji": "🧄",
        "name": "Garlic",
        "category": "Food & Drink",
        "meaning": "A bulbous herb with strong flavor, symbolizing culinary enhancement, health benefits, or protection against vampires."
      },
      {
        "id": 290,
        "emoji": "🧅",
        "name": "Onion",
        "category": "Food & Drink",
        "meaning": "A layered vegetable with pungent flavor, representing complexity, foundation ingredients, or tears while cutting."
      },
      {
        "id": 291,
        "emoji": "🥔",
        "name": "Potato",
        "category": "Food & Drink",
        "meaning": "A starchy tuber vegetable, symbolizing comfort food, versatility in cooking, or staple nutrition."
      },
      {
        "id": 292,
        "emoji": "🥦",
        "name": "Broccoli",
        "category": "Food & Drink",
        "meaning": "A green vegetable with dense florets, representing healthy eating, nutritional value, or childhood vegetable aversion."
      },
      {
        "id": 293,
        "emoji": "🍄",
        "name": "Mushroom",
        "category": "Food & Drink",
        "meaning": "An edible fungus with a stem and cap, symbolizing foraging, umami flavor, or magical elements in nature."
      },
      {
        "id": 294,
        "emoji": "🥜",
        "name": "Peanuts",
        "category": "Food & Drink",
        "meaning": "Legumes with edible seeds in pods, representing protein snacks, allergen awareness, or circus/baseball traditions."
      },
      {
        "id": 295,
        "emoji": "🧀",
        "name": "Cheese Wedge",
        "category": "Food & Drink",
        "meaning": "A triangular portion of cheese, symbolizing dairy products, gourmet foods, or savory snacking."
      },
      {
        "id": 296,
        "emoji": "🥚",
        "name": "Egg",
        "category": "Food & Drink",
        "meaning": "A white or brown oval food item, representing breakfast, protein sources, or potential new life."
      },
      {
        "id": 297,
        "emoji": "🍖",
        "name": "Meat on Bone",
        "category": "Food & Drink",
        "meaning": "A piece of cooked meat with visible bone, symbolizing barbecue, carnivorous diets, or primal eating."
      },
      {
        "id": 298,
        "emoji": "🥩",
        "name": "Cut of Meat",
        "category": "Food & Drink",
        "meaning": "A raw steak or chop, representing protein, grilling culture, or upscale dining."
      },
      {
        "id": 299,
        "emoji": "🍗",
        "name": "Poultry Leg",
        "category": "Food & Drink",
        "meaning": "A cooked chicken drumstick, symbolizing casual dining, finger foods, or festive meals."
      },
      {
        "id": 300,
        "emoji": "🌭",
        "name": "Hot Dog",
        "category": "Food & Drink",
        "meaning": "A sausage in a bun, representing fast food, ballpark snacks, or American casual cuisine."
      }
];



export default emojipedia;