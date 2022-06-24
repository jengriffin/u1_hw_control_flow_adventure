const playGame = () => {
  const placeChoice = () => {
    const trapperZone = () => {
      let zoneMovement = prompt(
        `In a flood of light you are transported to another dimension containing \
a (pillar), a (transport) pad and a (corpse). What do you inspect?`
      ).toLowerCase()
      if (zoneMovement === 'pillar') {
        alert(
          'The pillar swoons! It`s been years since anyone came! Embrace me, lover!'
        )
        placeChoice()
      } else if (zoneMovement === 'transport') {
        alert(
          'You run for the transport and the same rush of light returns you!'
        )
        placeChoice()
      } else if (zoneMovement === 'corpse') {
        alert(
          `You stare at the dismal fate that awaits you. The fragility of flesh. \
Loved by a pillar for eternity.`
        )
        placeChoice()
      } else {
        alert('Does Death await you in this place? Or is this eternal life?')
        placeChoice()
      }
    }

    let location = prompt(
      `You hold the flesh bound book. The Tome of Eternal Darkness. \
Whisper your heart's desire. \
(Roivas Mansion, Ehn'gha, Forbidden City, \
Angkor Thom, Oublie Cathedral, Trapper Dimension)`
    )
    switch (location) {
      case "Ehn'gha":
        const necropolis = () => {
          let finalStage = prompt(
            `Behind the door you find a necropolis! A city of the dead. \
Here you can (leave), (fight), or look at the (trapper).`
          ).toLowerCase()
          switch (finalStage) {
            case 'fight':
              let magic = prompt(
                `To defeat the ancients once and for all you active the pillars of magic \
that form the bones of the city. One last ruin to save the world! \
Do you enter it? (y/n)`
              ).toLowerCase()
              if (magic === 'y') {
                alert(
                  `The final ruin is placed! The stone shudders behind you! \
A powerful blast of magic crashes into space repelling the \
ancient and sealing them forever!`
                )
                playGame()
              } else {
                alert(
                  'What are you waiting for?! It`s too late! Humanity is lost!'
                )
                playGame()
              }
              break
            case 'leave':
              alert('You decide to leave.')
              placeChoice()
              break
            case 'trapper':
              let playTrapper = prompt(
                'You spot a trapper! Do you go to it? (y/n)'
              ).toLowerCase()
              if (playTrapper === 'y') {
                trapperZone()
              } else {
                alert('You decide to leave.')
                placeChoice()
              }
              break
            default:
              alert('You can be so incomprehensible sometimes.')
              placeChoice()
          }
        }
        necropolis()
      case 'Roivas Mansion':
        let name = prompt(
          `It's 3:33 in the morning. The phone rings and you answer. Who is this?`
        )
        alert(
          `${name}, this is the head of homicide. I'm afraid your grandfather has been murdered. \
We need you at the Roivas Mansion.`
        )
        let time = prompt(
          `No head. My god. Who could do this to grandpa?! Sickos! \
What if there's answers in the locked door in the basement? \
Maybe gramp's beloved broken clock holds the key. \
What time do you set the hands to?`
        )
        if (parseInt(time) === 333) {
          alert(
            `The clock pleas mournfully, and a compartment opens revealing a key decades older than you!`
          )
        } else {
          alert('Well, at least a broken clock is right twice a day.')
          placeChoice()
        }
        let basement = prompt(
          `In the basement, a forgetten, ominous door looms smothered in dust. \
You use the key and open it. Do you enter? (y/n)`
        ).toLowerCase()
        if (basement === 'y') {
          necropolis()
        } else {
          alert('You cannot go beyond the scary door, so you leave.')
          placeChoice()
        }
        break

      case 'Forbidden City':
        let karimProceed = prompt(
          `Karim has been driven mad by the desire to win his lady's heart. \
She will sell only if you find The Treasure. Do you help him? (y/n)`
        ).toLowerCase()
        if (karimProceed === 'y') {
          let chunkZombie = prompt(
            `After years in the desert Karim finds the ruins of The Forbidden City. \
Crawling over it's bones a lumbering, muscle-bound zombie chases him! What do you do?!`
          )
          alert(
            `Karim ${chunkZombie} and fights his way into a room with 3 daises. \
Above one an effigy floats effortlessly.`
          )
          let effigy = prompt('Take it? (y/n)').toLowerCase()
          if (effigy === 'y') {
            alert(
              `Karim reaches out and the ghostly spectre of his love appears. \
Shocked, he demands explanation. She warns him that the power of the \
effigy is not theirs to take. He must make a sacrifice like she to \
gain the power to gaurd it from those who would misuse it for untold evil.`
            )
            placeChoice()
          } else {
            alert(
              `Karim realizes that love should not be bought or won. \
He leaves with loot and becomes a sultan with 20 shih tzus. They ask for head scritchies.`
            )
            placeChoice()
          }
        } else {
          alert(
            `You tell Karim love is love. You can't buy it. \
You take him on a bros weekend and bond.`
          )
          placeChoice()
        }
      case 'Angkor Thom':
        let elliaChoice = prompt(
          `A bored court dancer name Ellia has discovered a tome bound in flesh. \
With its help she enters a temple hidden deep the jungle. \
It appears traps lie in wait. Should she enter? (y/n)`
        ).toLowerCase()
        if (elliaChoice === 'y') {
          let takeHeart = prompt(
            `Deep in the bowels of the temple a corpse god writhes, impaled. \
It whispers to her mind in a tongue unknown, but understood. \
The fate of the world depends on her. The god of many eyes offers its heart. \
Do you take it? (y/n)`
          ).toLowerCase()
          if (takeHeart === 'y') {
            alert(
              `Shaking, Ellia reaches for the heart. It vanishes before she can touch it, \
but she can feel its corrupting pulse in her chest.`
            )
            let move = prompt(
              'There`s one last chamber she has seen. Does she move towards it (f) or the trapper (t)?'
            ).toLowerCase()
            if (move === 'f') {
              alert(
                `The back of the chamber is empty. Turning around, the lich Pious scowls at you. \
He demands Mantorok's essence. Unable to release it, the dancer pleas, \
but Pious kills her. Now her flesh will rot as her spirit guards the heart from untold evil.`
              )
            } else {
              trapperZone()
            }
          } else {
            trapperZone()
          }
        } else {
          placeChoice()
        }
        break
      case 'Oublie Cathedral':
        let search =
          prompt(`Paul Luther is a monk who has traveled to see the Hand of Jude. \
But on the eve of his arrival, a fellow monk has been found murdered and desecrated. \
The old man of the bell tower says evil has corrupted the friary \
and only you can confirm his suspicions. Do you accept? (y/n)`).toLowerCase()
        if (search === 'y') {
          let open = prompt(`Things are indeed wrong here. In the wine cellar, \
a caste is hollow and seems to go into the wall. Do you open it? (y/n)`).toLowerCase()
          if (open === 'y') {
            let stepForward =
              prompt(`A maze of dungeons is hidden under the abbey! \
Its halls are infested with the unholy! And the head monk is there \
moving deeper within the bowels! Paul Luther follows unseen and enters \
the room he had seen his brother enter. It's bigger than the catheral above! \
At its center is an unholy altar with an effigy floating over the blood of the monks. \
Do you approach? (y/n)`).toLowerCase()
            if (stepForward === 'y') {
              alert(
                'Approaching the altar a monterous and recently fed Black Guardian raises it claw and crushes the curious monk. RIP Paul Luther.'
              )
              placeChoice()
            } else {
              trapperZone()
            }
          } else {
            trapperZone()
          }
        }
        break
      case 'Trapper Dimension':
        trapperZone()
        break
      default:
        alert('You can be so incomprehensible sometimes.')
        placeChoice()
    }
  }

  const effigyChoiceSelect = (zombieAttack) => {
    alert(`You ${zombieAttack}. Now you are in a circular room with 3 daises.`)
    let effigyChoice = prompt(
      `A chill slices your soul. This room is not right. \
Above each dais floats a glowing effigy. \
An emerald effigy resembling a warped angel (1), \
a pale blue delicately shaped dome (2), \
and a strange pulsing sculpture resembling a claw (3). \
Which should Pious claim?`
    )
    if (effigyChoice === '1') {
      alert(
        'Pious has been transformed into a lich! A loyal servant of The Darkness! All hail Xel`lotath!'
      )
      placeChoice()
    } else if (effigyChoice === '2') {
      alert(
        'Pious has been transformed into a lich! A loyal servant of The Darkness! All hail Ulyaoath!'
      )
      placeChoice()
    } else {
      alert(
        'Pious has been transformed into a lich! A loyal servant of The Darkness! All hail Chattur`gha!'
      )
      placeChoice()
    }
  }

  let start = prompt(
    `Deep into that darkness peering, long I stood there, \
wondering...peering...doubting... Do you doubt?`
  )
  alert(`${start}, your time is now.`)
  let begin = prompt(
    `You are Pious, a Roman centurion, your emperor has ordered you to find \
an artifact of untold power. In the desert 3 voices call to you. Do you follow?`
  )
  if (begin === 'yes' || begin === 'y') {
    alert(
      'You follow to a ring of stones, and are teleported to a forbidden ruin.'
    )
    let forbiddenHall = prompt(
      `A shaft descends towards a lower level, a hall looms to your left, \
a barred door leers to your right. How do you proceed? \
Climb the ladder (L)? Enter the hall (H)? Try the door (D)?`
    ).toUpperCase()
    switch (forbiddenHall) {
      case 'L':
        let ladderAttack = prompt(
          'You descend the ladder and a waif-like zombie lumbers towards you. What do you do?'
        )
        effigyChoiceSelect(ladderAttack)
        break
      case 'H':
        let hallAttack = prompt(
          'You tiptoe to the hallway and a waif-like zombie lumbers towards you. What do you do?'
        )
        effigyChoiceSelect(hallAttack)
        break
      case 'D':
        let doorAttack = prompt(
          `You find a key and the rusted lock breaks under your hand. \
The door opens and a waif-like zombie lumbers towards you. What do you do?`
        )
        effigyChoiceSelect(doorAttack)
        break
      default:
        alert('You do nothing and are trapped in this place forever.')
    }
  } else {
    alert("The alarm goes off. It's 3:33. Another day awakes")
    let restart = confirm('A banal madness. Want to try again?')
    if (restart == true) {
      playGame()
    }
  }
}
playGame()
