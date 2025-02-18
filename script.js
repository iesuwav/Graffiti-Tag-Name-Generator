 <script>
        document.getElementById('generateButton').addEventListener('click', generateNickname);

        function generateNickname() {
            const startLetter = document.getElementById('startLetter').value.trim().toLowerCase();
            const nicknameLength = parseInt(document.getElementById('lengthSelect').value, 10);

            const validLetters = 'abcdefghijklmnopqrstuvwxyz';
            const chosenStartLetter = startLetter || validLetters.charAt(Math.floor(Math.random() * validLetters.length));

            const vowels = 'aeiou';
            const consonants = 'bcdfghjklmnpqrstvwxyz';
            let nickname = chosenStartLetter;
            let isLastVowel = vowels.includes(chosenStartLetter);
            let lastVowel = isLastVowel ? chosenStartLetter : '';

            for (let i = 1; i < nicknameLength; i++) {
                if (i === 1) {
                    if (!vowels.includes(nickname[0])) {
                        let newVowel;
                        do {
                            newVowel = vowels.charAt(Math.floor(Math.random() * vowels.length));
                        } while (newVowel === lastVowel);
                        
                        nickname += newVowel;
                        lastVowel = newVowel;
                        isLastVowel = true;
                    } else {
                        let newConsonant = consonants.charAt(Math.floor(Math.random() * consonants.length));
                        nickname += newConsonant;
                        isLastVowel = false;
                    }
                } else {
                    if (isLastVowel) {
                        nickname += consonants.charAt(Math.floor(Math.random() * consonants.length));
                        isLastVowel = false;
                    } else {
                        let newVowel;
                        do {
                            newVowel = vowels.charAt(Math.floor(Math.random() * vowels.length));
                        } while (newVowel === lastVowel);
                        
                        nickname += newVowel;
                        lastVowel = newVowel;
                        isLastVowel = true;
                    }
                }
            }

            const secondToLastLetter = nickname[nickname.length - 2];
            let lastLetter = nickname[nickname.length - 1];

            if (!vowels.includes(secondToLastLetter) && lastLetter !== 's') {
                if (!lastLetter.includes('s')) {
                    nickname = nickname.slice(0, -1) + 's';
                }
            }

            document.getElementById('nickname').innerText = `Generated Tag: ${nickname.toUpperCase()}`;
        }
    </script>