const natureData: {
  name: string;
  link: string;
  portraitImages: { url: string; class: string }[];
  imageData: { url: string; class: string }[];
  color: string;
}[] = [
  {
    name: "Autumn 2022",
    color: "rgb(144, 65, 84)",
    link: "/portrait/models",
    portraitImages: [
      {
        url: "https://images.unsplash.com/photo-1543683840-c66117bdb1f8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1888&q=80",
        class: "img1",
      },
      {
        url: "https://images.unsplash.com/flagged/photo-1552863047-1dd55fb6f8fa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=4170&q=80",
        class: "img2",
      },
      {
        url: "https://images.unsplash.com/photo-1541420937988-702d78cb9fa1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=4170&q=80",
        class: "img3",
      },
      {
        url: "https://images.unsplash.com/photo-1508163223045-1880bc36e222?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3884&q=80",
        class: "img4",
      },
    ],
    imageData: [
      {
        url: "https://images.unsplash.com/photo-1481127950397-88e4c4f4b83b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=4170&q=80",
        class: "img1",
      },
      {
        url: "https://images.unsplash.com/photo-1506202687253-52e1b29d3527?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3504&q=80",
        class: "img2",
      },
      {
        url: "https://images.unsplash.com/photo-1510006841573-d508a230e7ea?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2187&q=80",
        class: "img3",
      },
      {
        url: "https://images.unsplash.com/photo-1477414348463-c0eb7f1359b6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=4740&q=80",
        class: "img4",
      },
      {
        url: "https://images.unsplash.com/photo-1444323696443-1b5cedba84bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3072&q=80",
        class: "img5",
      },
      {
        url: "https://images.unsplash.com/photo-1515592559813-3f7dff97e185?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2187&q=80",
        class: "img6",
      },
      {
        url: "https://images.unsplash.com/photo-1509224863479-ab583ee78692?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=4032&q=80",
        class: "img7",
      },
      {
        url: "https://images.unsplash.com/photo-1473343775075-61805b64e5d6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=4074&q=80",
        class: "img8",
      },
      {
        url: "https://images.unsplash.com/photo-1458134580443-fbb0743304eb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3850&q=80",
        class: "img9",
      },
      {
        url: "https://plus.unsplash.com/premium_photo-1658506768241-c3321bc87cdc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=4740&q=80",
        class: "img10",
      },

      {
        url: "https://images.unsplash.com/photo-1553984840-b8cbc34f5215?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=4740&q=80",
        class: "img11",
      },
    ],
  },
  {
    name: "Winter 2021",
    color: "rgb(0, 128, 140)",
    link: "/portrait/models",
    portraitImages: [
      {
        url: "https://images.unsplash.com/photo-1520234857033-917be5257246?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1888&q=80",
        class: "img1",
      },
      {
        url: "https://images.unsplash.com/photo-1484081064812-86e90e107fa8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=4170&q=80",
        class: "img2",
      },
      {
        url: "https://images.unsplash.com/photo-1560509138-fae3775773a4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3978&q=80",
        class: "img3",
      },
      {
        url: "https://images.unsplash.com/photo-1541875201440-e57ce2c30249?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=4000&q=80",
        class: "img4",
      },
    ],
    imageData: [
      {
        url: "https://images.unsplash.com/photo-1606770515086-ede533831581?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=4170&q=80",
        class: "img1",
      },
      {
        url: "https://images.unsplash.com/photo-1616588945355-bb09c77baf29?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=4740&q=80",
        class: "img2",
      },
      {
        url: "https://images.unsplash.com/photo-1547407139-3c921a66005c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2187&q=80",
        class: "img3",
      },
      {
        url: "https://images.unsplash.com/photo-1548189797-82c6a7cb85d2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=4740&q=80",
        class: "img4",
      },
      {
        url: "https://images.unsplash.com/photo-1487338442039-e2ca3b9924f4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=4429&q=80",
        class: "img5",
      },
      {
        url: "https://images.unsplash.com/photo-1551308075-d5f542da6386?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2187&q=80",
        class: "img6",
      },
      {
        url: "https://images.unsplash.com/photo-1512389098783-66b81f86e199?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=4814&q=80",
        class: "img7",
      },
      {
        url: "https://images.unsplash.com/photo-1457269449834-928af64c684d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3093&q=80",
        class: "img8",
      },
      {
        url: "https://images.unsplash.com/photo-1510151490593-aa277bc49f37?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=4074&q=80",
        class: "img9",
      },
      {
        url: "https://images.unsplash.com/photo-1518904001806-51917ed0a139?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=4073&q=80",
        class: "img10",
      },

      {
        url: "https://images.unsplash.com/photo-1487782310695-ed8583618566?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=4074&q=80",
        class: "img11",
      },
    ],
  },
];

export default natureData;
