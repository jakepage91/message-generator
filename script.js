const people = [
    "mother",
    "borther",
    "teacher",
    "uncle",
    "aunt",
    "sister",
    "friend",
    "little birdy",
    "rambli'n gambler"
];

const age = Math.floor(Math.random() * 90) + 1;

const countryMusicFacts = [
    "Country music has its roots in folk and western music, with influences from Celtic, African, and European music traditions. The genre evolved in the Southern United States in the early 20th century.",
    "The Carter Family, often referred to as the 'First Family of Country Music,' played a crucial role in popularizing country music. A.P. Carter, his wife Sara, and her cousin Maybelle are considered pioneers in the genre.",
    "The Grand Ole Opry, established in 1925 in Nashville, Tennessee, is one of the longest-running live radio programs in the world. It played a significant role in the development and popularization of country music.",
    "Hank Williams is often regarded as one of the most influential figures in country music. His hits like 'Hey Good Lookin'' and 'I'm So Lonesome I Could Cry' remain classics.",
    "In the 1970s, the Outlaw Country movement emerged, challenging the polished Nashville sound. Artists like Willie Nelson, Waylon Jennings, and Johnny Cash played key roles in this rebellious sub-genre.",
    "Dolly Parton is not only known for her powerful voice but also for her exceptional songwriting skills. She wrote some of her most famous hits like 'Jolene' and 'I Will Always Love You.'",
    "Bluegrass music, characterized by its fast tempo and intricate instrumental solos, has had a significant impact on country music. Bill Monroe, often referred to as the 'Father of Bluegrass,' played a pivotal role in its development.",
    "The Country Music Association (CMA) Awards, established in 1967, recognize outstanding achievements in the country music industry. The ceremony has become one of the most prestigious events in the genre.",
    "Shania Twain's album 'Come On Over' (1997) is the best-selling country album of all time. It incorporates elements of country, pop, and rock, appealing to a broad audience.",
    "Country music has embraced cross-genre collaborations, with artists teaming up with musicians from various genres. Examples include collaborations between country and pop artists, such as Taylor Swift and Ed Sheeran.",
    "Country music is often associated with line dancing, a popular social activity where people dance in lines or rows, following a choreographed pattern. Songs like 'Achy Breaky Heart' by Billy Ray Cyrus contributed to the line dancing craze.",
    "Several country artists have achieved crossover success, entering mainstream charts and gaining fans beyond the traditional country music audience. Examples include Garth Brooks, Shania Twain, and Taylor Swift.",
    "Johnny Cash's performance at Folsom Prison in 1968 is one of the most iconic moments in country music history. The live album recorded during this concert became a massive success.",
    "The term 'honky-tonk' is often associated with country music bars featuring live music, dancing, and a lively atmosphere. It has its roots in the early honky-tonk piano style.",
    "Patsy Cline's timeless ballad 'Crazy,' written by Willie Nelson, has been covered by numerous artists and remains a classic in both country and pop music.",
    "The banjo, a key instrument in country and bluegrass music, has West African roots. It was brought to America by slaves and evolved into the instrument we know today.",
    "Country music often tells stories, and 'The Night the Lights Went Out in Georgia' by Vicki Lawrence is a prime example. The song's narrative style has been a hallmark of the genre.",
    "Country music has a strong tradition of storytelling through its lyrics, and 'The Ballad of Lucy Jordan' by Dr. Hook is an example of a narrative song that gained popularity.",
    "The pedal steel guitar, known for its distinctive sound, became a staple in country music in the 1940s. Its emotive slides and bends contribute to the genre's signature twang.",
    "Country music festivals, such as Stagecoach and CMA Fest, attract thousands of fans each year, creating a vibrant community and showcasing a diverse range of country artists.",
    "Garth Brooks, one of the best-selling country artists, adopted the alter ego 'Chris Gaines' in an experimental project, releasing a rock album titled 'In the Life of Chris Gaines.'",
    "Country music has been a source of inspiration for other genres. The Eagles' hit 'Take It Easy,' co-written by Jackson Browne, features a verse that pays homage to Winslow, Arizona, and country music."
  ];

  console.log(`As my ${people[Math.floor(Math.random() * people.length)]} used to tell me when I was ${age}: ${countryMusicFacts[Math.floor(Math.random() * countryMusicFacts.length)]}`);  