// create object enum for assets icons, logo, inustations, flags, avatars with blugins as properties
var asset_type = {
  iconRegular: {
    config: {
      plugins: [
        {
          name: 'isArtBoardCorrect',
          params: {
            size: ['24', '24'],
          },
        },
        // {
        //   name: 'isWorkingAreaCorrect',
        //   params: {
        //     size: ['22', '22'],
        //   },
        // },
        // // only single path is allowed
        // {
        //   name: 'areThereNthPaths',
        //   params: {
        //     amount: 1,
        //   },
        // },
        // no fills are allowed
        // {
        //   name: 'areFillsAllowed',
        //   params: {
        //     state: false,
        //   },
        // },
        // follow snake case
        {
          name: 'isSnakeCase',
        },
      ],
    },
    resultTemplate: {
      isArtBoardCorrect: false,
      isWorkingAreaCorrect: false,
      areThereNthPaths: false,
      areFillsAllowed: false,
      isSnakeCase: false,
    },
  },
  iconColor: {
    config: {
      plugins: [
        {
          name: 'isArtBoardCorrect',
          params: {
            size: ['24', '24'],
          },
        },
        // {
        //   name: 'isWorkingAreaCorrect',
        //   params: {
        //     size: ['22', '22'],
        //   },
        // },
        // // only single path is allowed
        // {
        //   name: 'areThereNthPaths',
        //   params: {
        //     amount: 1,
        //   },
        // },
        // no fills are allowed
        // {
        //   name: 'areFillsAllowed',
        //   params: {
        //     state: false,
        //   },
        // },
        // follow snake case
        {
          name: 'isSnakeCase',
        },
      ],
    },
  },
};

exports.validationAssetType = asset_type;
