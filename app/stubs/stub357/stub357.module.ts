import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub357Component} from "./stub357.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub357Component
        }])
    ],
    declarations: [
        Stub357Component
    ]
})
export class Stub357Module {

}
