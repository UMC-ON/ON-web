import { UserList } from '../../components/Common/TempDummyData/PostList';

export const SignUpValidCheck = (target, isAllValid) => {
  const email_regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i;
  const password_regex =
    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;

  const specialChar =
    /[~!@\#$%^&*\()\-=+_'\;<>0-9\/.\`:\"\\,\[\]?|{}ㄱ-ㅎㅏ-ㅣ]/gi;
  const onlyDigits = /[0-9]/gi;
  const phonePattern = /[0-9]{3}[0-9]{4}[0-9]{4}/gi;

  switch (target.name) {
    case 'email': {
      if (!email_regex.test(target.value)) {
        isAllValid.current.email = false;
        return false;
      } else {
        isAllValid.current.email = true;
        return true;
      }
    }
    case 'password': {
      if (!password_regex.test(target.value)) {
        isAllValid.current.password = false;
        return false;
      } else {
        isAllValid.current.password = true;
        return true;
      }
    }
    case 'nickName': {
      if (!target.value) {
        isAllValid.current.nickName = false;
        return;
      }
      if (UserList.filter((user) => user.nickName === target.value)[0]) {
        isAllValid.current.nickName = false;
        return false;
      } else {
        isAllValid.current.nickName = true;
        return true;
      }
    }
    case 'name': {
      if (!specialChar.test(target.value)) {
        isAllValid.current.name = true;
        return true;
      } else {
        isAllValid.current.name = false;
        return false;
      }
    }
    case 'age': {
      if (target.value && onlyDigits.test(target.value)) {
        if (target.value <= 100 && target.value >= 1) {
          isAllValid.current.age = true;
          return true;
        }
        isAllValid.current.age = false;
        return false;
      } else {
        isAllValid.current.age = false;
        return false;
      }
    }
    case 'gender': {
      if (target.value !== '') {
        isAllValid.current.gender = true;
        return true;
      } else {
        isAllValid.current.gender = false;
        return false;
      }
    }
    case 'phone': {
      if (phonePattern.test(target.value) && target.value.length === 11) {
        isAllValid.current.phone = true;
        return true;
      } else {
        isAllValid.current.phone = false;
        return false;
      }
    }
  }
};
