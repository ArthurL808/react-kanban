
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('cards').del()
    .then(function () {
      // Inserts seed entries
      return knex('cards').insert([{
        "title": "Silk",
        "body": "Pellentesque eget nunc.",
        "priority_id": 1,
        "status_id": 3,
        "created_by": 15,
        "assigned_to": 21
      }, {
        "title": "Swell Season, The",
        "body": "Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis. Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.",
        "priority_id": 4,
        "status_id": 2,
        "created_by": 5,
        "assigned_to": 15
      }, {
        "title": "Don't Deliver Us from Evil (Mais ne nous délivrez pas du mal)",
        "body": "Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti. Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris. Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet.",
        "priority_id": 3,
        "status_id": 1,
        "created_by": 22,
        "assigned_to": 11
      }, {
        "title": "Crazy Sexy Cancer",
        "body": "Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue.",
        "priority_id": 1,
        "status_id": 2,
        "created_by": 1,
        "assigned_to": 12
      }, {
        "title": "Slaughterhouse",
        "body": "Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum. In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo. Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros.",
        "priority_id": 3,
        "status_id": 1,
        "created_by": 12,
        "assigned_to": 18
      }, {
        "title": "Pete Kelly's Blues",
        "body": "Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.",
        "priority_id": 3,
        "status_id": 1,
        "created_by": 25,
        "assigned_to": 10
      }, {
        "title": "Morituri",
        "body": "Vestibulum sed magna at nunc commodo placerat. Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat.",
        "priority_id": 2,
        "status_id": 3,
        "created_by": 25,
        "assigned_to": 21
      }, {
        "title": "Nothing But Ghosts (Nichts als Gespenster)",
        "body": "Nulla nisl.",
        "priority_id": 3,
        "status_id": 3,
        "created_by": 10,
        "assigned_to": 15
      }, {
        "title": "Many Adventures of Winnie the Pooh, The",
        "body": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
        "priority_id": 3,
        "status_id": 2,
        "created_by": 1,
        "assigned_to": 23
      }, {
        "title": "Broken Hearts Club, The",
        "body": "Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim.",
        "priority_id": 2,
        "status_id": 1,
        "created_by": 10,
        "assigned_to": 3
      }, {
        "title": "Underworld: Awakening",
        "body": "Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis.",
        "priority_id": 3,
        "status_id": 3,
        "created_by": 22,
        "assigned_to": 18
      }, {
        "title": "Mean Guns",
        "body": "Vestibulum sed magna at nunc commodo placerat. Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat. Nulla nisl. Nunc nisl.",
        "priority_id": 3,
        "status_id": 3,
        "created_by": 11,
        "assigned_to": 7
      }, {
        "title": "Labyrinth",
        "body": "Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.",
        "priority_id": 2,
        "status_id": 2,
        "created_by": 16,
        "assigned_to": 11
      }, {
        "title": "Not with My Wife, You Don't!",
        "body": "Aliquam non mauris. Morbi non lectus.",
        "priority_id": 4,
        "status_id": 1,
        "created_by": 7,
        "assigned_to": 17
      }, {
        "title": "Archangel",
        "body": "Morbi a ipsum. Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo.",
        "priority_id": 3,
        "status_id": 1,
        "created_by": 8,
        "assigned_to": 20
      }, {
        "title": "El Escarabajo de Oro",
        "body": "Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque. Duis bibendum. Morbi non quam nec dui luctus rutrum.",
        "priority_id": 3,
        "status_id": 2,
        "created_by": 13,
        "assigned_to": 4
      }, {
        "title": "Tetsuo, the Ironman (Tetsuo)",
        "body": "Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl.",
        "priority_id": 2,
        "status_id": 3,
        "created_by": 24,
        "assigned_to": 19
      }, {
        "title": "Spring Forward",
        "body": "Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius. Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla.",
        "priority_id": 2,
        "status_id": 3,
        "created_by": 11,
        "assigned_to": 20
      }, {
        "title": "Bedazzled",
        "body": "In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.",
        "priority_id": 3,
        "status_id": 1,
        "created_by": 24,
        "assigned_to": 18
      }, {
        "title": "Handle with Care (a.k.a. Citizen's Band)",
        "body": "Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.",
        "priority_id": 3,
        "status_id": 1,
        "created_by": 16,
        "assigned_to": 22
      }, {
        "title": "Joke, The (Zert)",
        "body": "Nulla tellus. In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem.",
        "priority_id": 1,
        "status_id": 1,
        "created_by": 25,
        "assigned_to": 18
      }, {
        "title": "Veer Zaara",
        "body": "Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.",
        "priority_id": 2,
        "status_id": 3,
        "created_by": 23,
        "assigned_to": 19
      }, {
        "title": "[REC] 4: Apocalypse",
        "body": "Vestibulum sed magna at nunc commodo placerat. Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat.",
        "priority_id": 1,
        "status_id": 2,
        "created_by": 6,
        "assigned_to": 13
      }, {
        "title": "Brotherhood, The",
        "body": "In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem.",
        "priority_id": 1,
        "status_id": 2,
        "created_by": 12,
        "assigned_to": 12
      }, {
        "title": "Showgirls",
        "body": "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo.",
        "priority_id": 3,
        "status_id": 3,
        "created_by": 18,
        "assigned_to": 16
      }, {
        "title": "Silent Night, Bloody Night",
        "body": "Nullam molestie nibh in lectus. Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue. Vestibulum rutrum rutrum neque.",
        "priority_id": 3,
        "status_id": 3,
        "created_by": 5,
        "assigned_to": 23
      }, {
        "title": "Logan's Run",
        "body": "Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique.",
        "priority_id": 1,
        "status_id": 1,
        "created_by": 5,
        "assigned_to": 25
      }, {
        "title": "Red Dawn",
        "body": "Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus. Pellentesque eget nunc.",
        "priority_id": 1,
        "status_id": 1,
        "created_by": 3,
        "assigned_to": 16
      }, {
        "title": "Slaves of New York",
        "body": "Etiam justo. Etiam pretium iaculis justo. In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus. Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi. Cras non velit nec nisi vulputate nonummy.",
        "priority_id": 3,
        "status_id": 2,
        "created_by": 17,
        "assigned_to": 1
      }, {
        "title": "Julie Johnson",
        "body": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus. Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis. Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis.",
        "priority_id": 4,
        "status_id": 1,
        "created_by": 19,
        "assigned_to": 8
      }, {
        "title": "Not of This Earth",
        "body": "Nunc rhoncus dui vel sem. Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus. Pellentesque at nulla.",
        "priority_id": 2,
        "status_id": 3,
        "created_by": 11,
        "assigned_to": 2
      }, {
        "title": "Ratcatcher",
        "body": "Nulla suscipit ligula in lacus. Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla.",
        "priority_id": 2,
        "status_id": 1,
        "created_by": 4,
        "assigned_to": 1
      }, {
        "title": "Thunderball",
        "body": "Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque. Duis bibendum. Morbi non quam nec dui luctus rutrum.",
        "priority_id": 2,
        "status_id": 1,
        "created_by": 22,
        "assigned_to": 12
      }, {
        "title": "Bang",
        "body": "Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat.",
        "priority_id": 4,
        "status_id": 2,
        "created_by": 3,
        "assigned_to": 6
      }, {
        "title": "Unspeakable Acts ",
        "body": "Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.",
        "priority_id": 2,
        "status_id": 3,
        "created_by": 17,
        "assigned_to": 17
      }, {
        "title": "Lawless Breed, The",
        "body": "Integer tincidunt ante vel ipsum.",
        "priority_id": 4,
        "status_id": 3,
        "created_by": 11,
        "assigned_to": 16
      }, {
        "title": "Fragile Trust: Plagiarism, Power, and Jayson Blair at the New York Times, A",
        "body": "Nullam molestie nibh in lectus. Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue.",
        "priority_id": 4,
        "status_id": 2,
        "created_by": 19,
        "assigned_to": 22
      }, {
        "title": "How to Die in Oregon",
        "body": "Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.",
        "priority_id": 3,
        "status_id": 1,
        "created_by": 9,
        "assigned_to": 6
      }, {
        "title": "Flesh for Frankenstein (a.k.a. Andy Warhol's Frankenstein)",
        "body": "Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl.",
        "priority_id": 2,
        "status_id": 1,
        "created_by": 19,
        "assigned_to": 3
      }, {
        "title": "Brewster's Millions",
        "body": "Suspendisse ornare consequat lectus.",
        "priority_id": 1,
        "status_id": 2,
        "created_by": 24,
        "assigned_to": 24
      }, {
        "title": "Bed & Breakfast: Love is a Happy Accident (Bed & Breakfast)",
        "body": "Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.",
        "priority_id": 3,
        "status_id": 3,
        "created_by": 10,
        "assigned_to": 5
      }, {
        "title": "Guilt Trip, The",
        "body": "Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo.",
        "priority_id": 3,
        "status_id": 2,
        "created_by": 14,
        "assigned_to": 16
      }, {
        "title": "Tales from the Golden Age (Amintiri din epoca de aur)",
        "body": "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.",
        "priority_id": 2,
        "status_id": 2,
        "created_by": 17,
        "assigned_to": 2
      }, {
        "title": "Berlin Calling",
        "body": "Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.",
        "priority_id": 4,
        "status_id": 2,
        "created_by": 13,
        "assigned_to": 3
      }, {
        "title": "What? (Che?)",
        "body": "Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet.",
        "priority_id": 4,
        "status_id": 1,
        "created_by": 20,
        "assigned_to": 22
      }, {
        "title": "Stargate: The Ark of Truth",
        "body": "Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo.",
        "priority_id": 2,
        "status_id": 3,
        "created_by": 5,
        "assigned_to": 16
      }, {
        "title": "Confidence",
        "body": "In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.",
        "priority_id": 3,
        "status_id": 3,
        "created_by": 4,
        "assigned_to": 2
      }, {
        "title": "Playing 'In the Company of Men' (En jouant 'Dans la compagnie des hommes')",
        "body": "Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus. Phasellus in felis. Donec semper sapien a libero. Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla.",
        "priority_id": 3,
        "status_id": 2,
        "created_by": 18,
        "assigned_to": 19
      }, {
        "title": "Dobermann",
        "body": "Quisque id justo sit amet sapien dignissim vestibulum.",
        "priority_id": 3,
        "status_id": 3,
        "created_by": 19,
        "assigned_to": 22
      }, {
        "title": "Short Term 12",
        "body": "Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo.",
        "priority_id": 4,
        "status_id": 1,
        "created_by": 25,
        "assigned_to": 16
      }]);
    });
};
