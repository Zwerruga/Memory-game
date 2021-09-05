import { shuffleArray } from "../../utils/ArrayRandomaizer.js";
import { cardActionsConstants } from "../actions/cardActions.js";

const initialState = {
  firstFlipped: null,
  secondFlipped: null,
  countFlipped: 0,
  desk: [
    {
      img: '<i class="fas fa-bullhorn"></i>',
      flip: "",
      blank: ""
    },
    {
      img: '<i class="fas fa-anchor"></i>',
      flip: "",
      blank: ""
    },
    {
      img: '<i class="fas fa-balance-scale"></i>',
      flip: "",
      blank: ""
    },
    {
      img: '<i class="fas fa-basketball-ball"></i>',
      flip: "",
      blank: ""
    },
    {
      img: '<i class="fas fa-birthday-cake"></i>',
      flip: "",
      blank: ""
    },
    {
      img: '<i class="fas fa-bomb"></i>',
      flip: "",
      blank: ""
    },
    {
      img: '<i class="fas fa-bug"></i>',
      flip: "",
      blank: ""
    },
    {
      img: '<i class="fas fa-car"></i>',
      flip: "",
      blank: ""
    },
    {
      img: '<i class="fas fa-chess-knight"></i>',
      flip: "",
      blank: ""
    },
    {
      img: '<i class="fas fa-crow"></i>',
      flip: "",
      blank: ""
    },
    {
      img: '<i class="fas fa-crown"></i>',
      flip: "",
      blank: ""
    },
    {
      img: '<i class="fab fa-envira"></i>',
      flip: "",
      blank: ""
    },
    {
      img: '<i class="fas fa-fighter-jet"></i>',
      flip: "",
      blank: ""
    },
    {
      img: '<i class="fas fa-flag"></i>',
      flip: "",
      blank: ""
    },
    {
      img: '<i class="fas fa-frog"></i>',
      flip: "",
      blank: ""
    },
    {
      img: '<i class="fas fa-helicopter"></i>',
      flip: "",
      blank: ""
    },
    {
      img: '<i class="fas fa-kiwi-bird"></i>',
      flip: "",
      blank: ""
    },
    {
      img: '<i class="fas fa-motorcycle"></i>',
      flip: "",
      blank: ""
    },
    {
      img: '<i class="fas fa-bullhorn"></i>',
      flip: "",
      blank: ""
    },
    {
      img: '<i class="fas fa-anchor"></i>',
      flip: "",
      blank: ""
    },
    {
      img: '<i class="fas fa-balance-scale"></i>',
      flip: "",
      blank: ""
    },
    {
      img: '<i class="fas fa-basketball-ball"></i>',
      flip: "",
      blank: ""
    },
    {
      img: '<i class="fas fa-birthday-cake"></i>',
      flip: "",
      blank: ""
    },
    {
      img: '<i class="fas fa-bomb"></i>',
      flip: "",
      blank: ""
    },
    {
      img: '<i class="fas fa-bug"></i>',
      flip: "",
      blank: ""
    },
    {
      img: '<i class="fas fa-car"></i>',
      flip: "",
      blank: ""
    },
    {
      img: '<i class="fas fa-chess-knight"></i>',
      flip: "",
      blank: ""
    },
    {
      img: '<i class="fas fa-crow"></i>',
      flip: "",
      blank: ""
    },
    {
      img: '<i class="fas fa-crown"></i>',
      flip: "",
      blank: ""
    },
    {
      img: '<i class="fab fa-envira"></i>',
      flip: "",
      blank: ""
    },
    {
      img: '<i class="fas fa-fighter-jet"></i>',
      flip: "",
      blank: ""
    },
    {
      img: '<i class="fas fa-flag"></i>',
      flip: "",
      blank: ""
    },
    {
      img: '<i class="fas fa-frog"></i>',
      flip: "",
      blank: ""
    },
    {
      img: '<i class="fas fa-helicopter"></i>',
      flip: "",
      blank: ""
    },
    {
      img: '<i class="fas fa-kiwi-bird"></i>',
      flip: "",
      blank: ""
    },
    {
      img: '<i class="fas fa-motorcycle"></i>',
      flip: "",
      blank: ""
    }
  ]
};

export const cardReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case cardActionsConstants.SET_NEW_DESK:
      return {
        ...initialState,
        desk: shuffleArray(initialState.desk)
      };
    case cardActionsConstants.SET_FIRST_FLIPPED:
      return {
        ...state,
        firstFlipped: payload,
        desk: [
          ...state.desk.slice(0, payload),
          { ...state.desk[payload], flip: true },
          ...state.desk.slice(payload + 1)
        ]
      };
    case cardActionsConstants.SET_SECOND_FLIPPED:
      return {
        ...state,
        secondFlipped: payload,
        desk: [
          ...state.desk.slice(0, payload),
          { ...state.desk[payload], flip: true },
          ...state.desk.slice(payload + 1)
        ]
      };
    case cardActionsConstants.COMPARE_FLIPPED:
      if (
        state.desk[state.firstFlipped]?.img ===
        state.desk[state.secondFlipped]?.img
      ) {
        const newDesk = [...state.desk];
        newDesk[state.firstFlipped] = {
          ...newDesk[state.firstFlipped],
          blank: true
        };
        newDesk[state.secondFlipped] = {
          ...newDesk[state.secondFlipped],
          blank: true
        };
        return {
          ...state,
          firstFlipped: null,
          secondFlipped: null,
          countFlipped: state.countFlipped + 2,
          desk: newDesk
        };
      } else {
        const newDesk = [...state.desk];
        newDesk[state.firstFlipped] = {
          ...newDesk[state.firstFlipped],
          flip: false
        };
        newDesk[state.secondFlipped] = {
          ...newDesk[state.secondFlipped],
          flip: false
        };
        return {
          ...state,
          firstFlipped: null,
          secondFlipped: null,
          desk: newDesk
        };
      }
    case cardActionsConstants.HIDE_FIRST_FLIPPED:
      return {
        ...state,
        firstFlipped: null,
        desk: [
          ...state.desk.slice(0, state.firstFlipped),
          { ...state.desk[state.firstFlipped], flip: false },
          ...state.desk.slice(state.firstFlipped + 1)
        ]
      };

    default:
      return state;
  }
};
