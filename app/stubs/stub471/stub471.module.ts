import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub471Component} from "./stub471.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub471Component
        }])
    ],
    declarations: [
        Stub471Component
    ]
})
export class Stub471Module {

}
