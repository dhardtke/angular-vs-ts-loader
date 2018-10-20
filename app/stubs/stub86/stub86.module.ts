import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub86Component} from "./stub86.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub86Component
        }])
    ],
    declarations: [
        Stub86Component
    ]
})
export class Stub86Module {

}
