import { createContext, useEffect, useReducer } from 'react';
import PropTypes from 'prop-types';
// utils
import { loader } from 'graphql.macro';
import { useLazyQuery } from '@apollo/client';
import { isValidToken, setSession } from '../utils/jwt';
import { SESSION_KEY } from '../constant';

// ----------------------------------------------------------------------
const LOGIN = loader('../graphql/queries/auth/login.graphql');
const PROFILE = loader('../graphql/queries/user/me.graphql');

// ----------------------------------------------------------------------

const initialState = {
  isAuthenticated: false,
  isInitialized: false,
  user: null,
};

const handlers = {
  INITIALIZE: (state, action) => {
    const { isAuthenticated, user } = action.payload;
    return {
      ...state,
      isAuthenticated,
      isInitialized: true,
      user,
    };
  },
  LOGIN: (state, action) => {
    const { user } = action.payload;

    return {
      ...state,
      isAuthenticated: true,
      user,
    };
  },
  LOGOUT: (state) => ({
    ...state,
    isAuthenticated: false,
    user: null,
  }),
};

const reducer = (state, action) => (handlers[action.type] ? handlers[action.type](state, action) : state);

const AuthContext = createContext({
  ...initialState,
  method: 'jwt',
  login: () => Promise.resolve(),
  logout: () => Promise.resolve(),
});

// ----------------------------------------------------------------------

AuthProvider.propTypes = {
  children: PropTypes.node,
};

function AuthProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  const [loginFn] = useLazyQuery(LOGIN, {
    onCompleted: async (res) => {
      if (res) {
        return res;
      }
      return null;
    },
  });
  // console.log('login',loginFn());
  const [fetchProfile] = useLazyQuery(PROFILE, {
    fetchPolicy: 'network-only',
    onCompleted: async (res) => {
      if (res) {
        return res.userInfo;
      }
      return null;
    },
  });

  useEffect(() => {
    const initialize = async () => {
      try {
        const accessToken = window.localStorage.getItem(SESSION_KEY.ACCESS_TOKEN);

        if (accessToken && isValidToken(accessToken)) {
          setSession(accessToken);
          const fetchedData = await fetchProfile();
          const user = fetchedData.me ?? fetchedData?.data?.me;

          if (user) {
            const currentUser = {
              ...user,
              id: `${user?.id}`,
              role: user?.role,
              signatureImg: user?.signatureImg,
              displayName: user?.fullName,
              photoURL: user?.avatarURL,
              status: user?.isActive === true ? 'Đang hoạt động' : 'Ngừng hoạt động',
              phone: user?.phoneNumber,
              company: 'Công ty CP Thép Công Nghiệp HN',
            };
            dispatch({
              type: 'INITIALIZE',
              payload: {
                isAuthenticated: true,
                user: currentUser,
              },
            });
          } else {
            setSession(null);
            dispatch({
              type: 'INITIALIZE',
              payload: {
                isAuthenticated: false,
                user: null,
              },
            });
          }
        } else {
          dispatch({
            type: 'INITIALIZE',
            payload: {
              isAuthenticated: false,
              user: null,
            },
          });
        }
      } catch (err) {
        console.error(err);
        dispatch({
          type: 'INITIALIZE',
          payload: {
            isAuthenticated: false,
            user: null,
          },
        });
      }
    };

    initialize().catch((e) => console.error(e));
  }, [fetchProfile]);

  const login = async (account, password) => {
    const response = await loginFn({
      variables: {
        input: {
          account,
          password,
        },
      },
      fetchPolicy: 'cache-and-network',
    }).catch((e) => {
      throw e;
    });
    if (!response.error && response.data.login) {
      const { token, user } = response.data.login;
      const currentUser = {
        ...user,
        id: `${user?.id}`,
        role: user?.role,
        signatureImg: user?.signatureImg,
        displayName: user?.fullName,
        photoURL: user?.avatarURL,
        status: user?.isActive === true ? 'Đang hoạt động' : 'Ngừng hoạt động',
        phone: user?.phoneNumber,
        company: 'Công ty CP Thép Công Nghiệp HN',
      };
      setSession(token);
      dispatch({
        type: 'LOGIN',
        payload: {
          isAuthenticated: true,
          user: currentUser,
        },
      });
    }
    if (response.errors) {
      throw response.error;
    }
  };

  const logout = async () => {
    setSession(null);
    dispatch({ type: 'LOGOUT' });
  };

  return (
    <AuthContext.Provider
      value={{
        ...state,
        method: 'jwt',
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export { AuthContext, AuthProvider };
