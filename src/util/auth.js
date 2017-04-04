import {UserAuthWrapper} from 'redux-auth-wrapper';

import intersection from 'lodash/intersection';
import isEmpty from 'lodash/isEmpty';

const VisibleOnlyFor = (...roles) => {
    return UserAuthWrapper({
        authSelector: state => state.userState.user,
        wrapperDisplayName: `VisibleOnlyFor ${roles}`,
        predicate: user => {
            return !isEmpty(intersection(roles, user.roles));
        },
        FailureComponent: null,
    });
};

export default VisibleOnlyFor;
