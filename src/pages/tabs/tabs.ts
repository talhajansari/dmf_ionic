import { Component } from '@angular/core';

import { CreatePage } from '../create/create';
import { CasesPage } from '../cases/cases';
import { SettingPage } from '../setting/setting';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = CreatePage;
  tab2Root: any = CasesPage;
  tab3Root: any = SettingPage;

  constructor() {

  }
}
