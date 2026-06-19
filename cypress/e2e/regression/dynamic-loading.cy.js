import DynamicLoadingPage from '../../pages/DynamicLoadingPage';

import testData from '../../fixtures/testData.json';

describe('Regression | Dynamic loading', () => {
  it('REG-DYNAMIC-001 - waits for hidden element to become visible', () => {
    DynamicLoadingPage.visitExampleOne();
    DynamicLoadingPage.startLoading();

    DynamicLoadingPage.assertLoadedMessage(testData.dynamicLoading.expectedMessage);
  });

  it('REG-DYNAMIC-002 - waits for rendered element to appear', () => {
    DynamicLoadingPage.visitExampleTwo();
    DynamicLoadingPage.startLoading();

    DynamicLoadingPage.assertLoadedMessage(testData.dynamicLoading.expectedMessage);
  });
});
