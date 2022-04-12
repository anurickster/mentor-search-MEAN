import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { LoginService } from '../../auth/services/login.service';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.css'],
})
export class NavigationBarComponent implements OnInit, OnDestroy {
  constructor(private loginService: LoginService) {}

  navLinkSwitch: boolean = this.loginService.getAuth(); // based on the navLinkSwitch value, the Nav links will either be visible or not
  private authListenerSubs?: Subscription;

  toggleNavbar() {
    this.navLinkSwitch = !this.navLinkSwitch;
  } // toggles the navbar links

  ngOnDestroy(): void {
    this.authListenerSubs?.unsubscribe();
    this.navLinkSwitch = false;
  }

  logout() {
    this.loginService.logout();
  }

  ngOnInit(): void {
    this.authListenerSubs = this.loginService
      .getAuthStatusListener()
      .subscribe((authenticated) => {
        this.navLinkSwitch = authenticated;
      });

    console.log(`navlinkswitch staus navbar`, this.navLinkSwitch);
  }
}
