import { Component, OnInit} from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import 'rxjs/add/operator/map'; 

import { FragmentService, Fragment } from './fragment.service';

@Component({
  selector: 'app-fragment',
  templateUrl: 'fragment.component.html'
})
export class FragmentComponent implements OnInit {

  public fragment: Fragment;

  constructor(
    private route: ActivatedRoute,
    private fragmentService: FragmentService
  ) {}

  ngOnInit(): void {
    this.route.paramMap
      .map((params: ParamMap) => this.fragmentService.getById(params.get('id')))
      .subscribe(f => this.fragment = f);
  }
}
