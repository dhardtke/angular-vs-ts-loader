import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub761Component} from "./stub761.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub761Component
        }])
    ],
    declarations: [
        Stub761Component
    ]
})
export class Stub761Module {

}
