import { API } from "../actions/type";
import Super from "./super";
const initialState = {
  dashboard: {
    top1: parseInt(Math.random() * 100),
    top2: parseInt(Math.random() * 100),
    top3: parseInt(Math.random() * 100),
    top4: parseInt(Math.random() * 100),
    top5: parseInt(Math.random() * 100),
  },
  resultList: [
    {
      number: "000001",
      type: "BIGREWARD",
      description: "รางวัลที่ 1",
      tier: 1,
    },
    {
      number: "01",
      type: "TWOLAST",
      description: "รางวัลเลขท้าย 2 ตัว",
      tier: 1,
    },
    {
      number: "555",
      type: "THREEFIRST",
      description: "รางวัลเลขหน้า 3 ตัว",
      tier: 1,
    },
    {
      number: "333",
      type: "THREELAST",
      description: "รางวัลเลขท้าย 3 ตัว",
      tier: 1,
    },
    {
      number: "000000",
      type: "SIDEREWARD",
      description: "รางวัลข้างเคียงรางวัลที่ 1",
      tier: 2,
    },
    {
      number: "000002",
      type: "SIDEREWARD",
      description: "รางวัลข้างเคียงรางวัลที่ 1",
      tier: 2,
    },
    {
      number: "000003",
      type: "SECONDREWARD",
      description: "รางวัลที่ 2",
      tier: 3,
    },
    {
      number: "000004",
      type: "SECONDREWARD",
      description: "รางวัลที่ 2",
      tier: 3,
    },
    {
      number: "000005",
      type: "SECONDREWARD",
      description: "รางวัลที่ 2",
      tier: 3,
    },
    {
      number: "000006",
      type: "THIRDREWARD",
      description: "รางวัลที่ 3",
      tier: 4,
    },
    {
      number: "000007",
      type: "THIRDREWARD",
      description: "รางวัลที่ 3",
      tier: 4,
    },
    {
      number: "000008",
      type: "THIRDREWARD",
      description: "รางวัลที่ 3",
      tier: 4,
    },
    {
      number: "000009",
      type: "FOURTHREWARD",
      description: "รางวัลที่ 4",
      tier: 5,
    },
    {
      number: "000010",
      type: "FOURTHREWARD",
      description: "รางวัลที่ 4",
      tier: 5,
    },
    {
      number: "000011",
      type: "FOURTHREWARD",
      description: "รางวัลที่ 4",
      tier: 5,
    },
    {
      number: "000012",
      type: "FIFTHREWARD",
      description: "รางวัลที่ 5",
      tier: 6,
    },
    {
      number: "000013",
      type: "FIFTHREWARD",
      description: "รางวัลที่ 5",
      tier: 6,
    },
    {
      number: "000014",
      type: "FIFTHREWARD",
      description: "รางวัลที่ 5",
      tier: 6,
    },
    {
      number: "000015",
      type: "FIFTHREWARD",
      description: "รางวัลที่ 5",
      tier: 6,
    },
    {
      number: "000016",
      type: "FIFTHREWARD",
      description: "รางวัลที่ 5",
      tier: 6,
    },
  ],
};
export default function deepmap(state = initialState, action) {
  const reducer = new Super({ state, action });
  switch (action.type) {
    default:
      return reducer.observe();
  }
}
