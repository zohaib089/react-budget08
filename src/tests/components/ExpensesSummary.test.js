import React from 'react';
import { shallow } from 'enzyme';
import { ExpensesSummary } from '../../components/ExpensesSummary';

test('should render expense summary with 1 expense', () => {
  const wrapper = shallow(
    <ExpensesSummary expenseCount={1} expensesTotal={275} />
  );
  expect(wrapper).toMatchSnapshot();
});
test('should render expense summary with mulitple expense', () => {
  const wrapper = shallow(
    <ExpensesSummary expenseCount={23} expensesTotal={27512345678} />
  );
  expect(wrapper).toMatchSnapshot();
});
