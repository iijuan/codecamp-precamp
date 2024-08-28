function 가입하는기능() {
    const 이메일주소 = document.getElementById('이메일').value;
    const 잘라진이메일 = 이메일주소.split('@');
    const 아이디 = 잘라진이메일[0];
    const 도메인 = 잘라진이메일[1];
    const 잘라진아이디 = 아이디.slice(0, Math.floor(아이디.length / 2));
    // const 별표 = '*'.repeat(Math.floor((아이디.length / 2))); 
    const 가려진아이디 = 잘라진아이디.padEnd(아이디.length, '*');
    const 가려진이메일 = `${가려진아이디}@${도메인}`;


    if (아이디.length > 4) {

        alert(`회원가입을 축하합니다. 가입하신 이메일은 ${가려진이메일}입니다.`)
    } else {
        alert("올바른 이메일을 입력해 주세요.")
    }
}