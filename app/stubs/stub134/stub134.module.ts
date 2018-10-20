import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub134Component} from "./stub134.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub134Component
        }])
    ],
    declarations: [
        Stub134Component
    ]
})
export class Stub134Module {

}
