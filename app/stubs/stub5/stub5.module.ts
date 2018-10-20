import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub5Component} from "./stub5.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub5Component
        }])
    ],
    declarations: [
        Stub5Component
    ]
})
export class Stub5Module {

}
